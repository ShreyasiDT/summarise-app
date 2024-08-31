"use server";

import { Pinecone } from "@pinecone-database/pinecone";
import { traceable } from "langsmith/traceable";
import { download, VideoInfo } from "~/actions/download";
import { transcribe } from "~/actions/transcribe";
import { env } from "~/env";
import {
  createPineconeIndex,
  updatePineconeWithTranscription,
} from "~/lib/rag-util";
import { redis } from "~/lib/redis";
import { generateChapters } from "./generate-chapters";

const client = new Pinecone({
  apiKey: env.PINECONE_API_KEY,
});

const processVideo = traceable(
  async (id: string) => {
    "use server";
    try {
      const cachedData = await redis.get<{
        transcription: string;
        videoInfo: VideoInfo;
        output: string; // Add output to the cached data type
      }>(id);

      if (cachedData) {
        console.log("----- CACHED -----");
        const { transcription, videoInfo, output } = cachedData;
        return {
          transcription,
          output,
          status: "complete",
          cached: true,
          videoInfo,
        };
      }

      // If not in cache, proceed with transcription
      const result = await download(id);
      const { audioPath, videoInfo } = await result.promise;
      const transcription = await transcribe({ filePath: audioPath });

      // Ensure the index exists

      // Update Pinecone with the transcription

      const output = await generateChapters(transcription);

      await redis.set(
        id,
        { transcription, videoInfo, output }, // Include output in the cached data
        {
          ex: 60 * 60 * 24 * 7, // Cache for 7 days
        },
      );
      await createPineconeIndex(client, "video-transcriptions", 1024);
      await updatePineconeWithTranscription(
        client,
        "video-transcriptions",
        transcription,
        id,
      );

      return {
        transcription,
        output,
        status: "complete",
        cached: false,
        videoInfo,
      };
    } catch (error) {
      console.error("Error Processing Video", error);
      return {
        status: "error",
        error: "An error occurred during video processing",
      };
    }
  },
  { name: "process-video" },
);

export default processVideo;
