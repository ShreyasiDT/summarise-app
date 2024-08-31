"use server";

import { transcribeAudio } from "~/app/utils/transcribeAudio";

export async function transcribe({ filePath }: { filePath: string }) {
  "use server";

  try {
    const transcription = await transcribeAudio(filePath);
    return transcription;
  } catch (error) {
    console.error("Error in transcribe function:", error);
    throw error;
  }
}
