/* eslint-disable @typescript-eslint/no-empty-function */
"use server";

import ytdl from "@distube/ytdl-core";
import fs from "fs";
import path from "path";

interface thumbnail {
  url: string;
  width: number;
  height: number;
}
export interface VideoInfo {
  title?: string;
  description?: string;
  duration?: string;
  author?: string;
  viewCount?: string;
  thumbnails?: thumbnail[];
}

export async function download(id: string) {
  "use server";
  try {
    const url = `https://www.youtube.com/watch?v=${id}`;

    const cookies = [
      {
        domain: ".youtube.com",
        expirationDate: 1758463656.538141,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "1",
        value: "jco0ObDPOtJHkZni/Av5P3R1pCKJxfSmer",
        id: 1,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463656.538258,
        hostOnly: false,
        httpOnly: true,
        name: "__Secure-1PSID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "1",
        value:
          "g.a000nAhWh8OH4M7oyxJau5CuRR_af8QHYWuUmLquDL7zS6ZCBrRZ4OUYNqwgp1nTEqXVyLzmFQACgYKAVASARQSFQHGX2MidaAPlD-d6TR2BCRWvohWWBoVAUF8yKoi57WSX3vBS--CNYipZa9O0076",
        id: 2,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1755439674.449466,
        hostOnly: false,
        httpOnly: true,
        name: "__Secure-1PSIDCC",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "1",
        value:
          "AKEyXzX0pPboq0SQPx5DgPV4QaXWGTtMLFU9FS4lrnLJSYm5eBvzn3E_953G5_5ESfi53c9XNA",
        id: 3,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1755439656.53783,
        hostOnly: false,
        httpOnly: true,
        name: "__Secure-1PSIDTS",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "1",
        value:
          "sidts-CjIBUFGoh8sT8i63US9zfKKV2PS_HTa0FvjtLElVwNRyGoeMDOT5XI6HRSPJCmDWCgLVxRAA",
        id: 4,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463656.538182,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-3PAPISID",
        path: "/",
        sameSite: "no_restriction",
        secure: true,
        session: false,
        storeId: "1",
        value: "jco0ObDPOtJHkZni/Av5P3R1pCKJxfSmer",
        id: 5,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463656.5383,
        hostOnly: false,
        httpOnly: true,
        name: "__Secure-3PSID",
        path: "/",
        sameSite: "no_restriction",
        secure: true,
        session: false,
        storeId: "1",
        value:
          "g.a000nAhWh8OH4M7oyxJau5CuRR_af8QHYWuUmLquDL7zS6ZCBrRZ8uUGAtIms8tWV5Ekw4KEuQACgYKARsSARQSFQHGX2MiuprBYJkGN_F46wvTD8KPZBoVAUF8yKqrfQ8qb38I0qVRRid1No-m0076",
        id: 6,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1755439674.449525,
        hostOnly: false,
        httpOnly: true,
        name: "__Secure-3PSIDCC",
        path: "/",
        sameSite: "no_restriction",
        secure: true,
        session: false,
        storeId: "1",
        value:
          "AKEyXzUkYMGC-rVQztLZUrGxbrtQScoU6W-eOsMOuNRZOnRxiinmDBo1DQ-akll_3X61AKB9",
        id: 7,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1755439656.537932,
        hostOnly: false,
        httpOnly: true,
        name: "__Secure-3PSIDTS",
        path: "/",
        sameSite: "no_restriction",
        secure: true,
        session: false,
        storeId: "1",
        value:
          "sidts-CjIBUFGoh8sT8i63US9zfKKV2PS_HTa0FvjtLElVwNRyGoeMDOT5XI6HRSPJCmDWCgLVxRAA",
        id: 8,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463656.53806,
        hostOnly: false,
        httpOnly: false,
        name: "APISID",
        path: "/",
        sameSite: "unspecified",
        secure: false,
        session: false,
        storeId: "1",
        value: "1IT0KfSb685ckvH0/As_O5wmYIT5LvYO0H",
        id: 9,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463656.53798,
        hostOnly: false,
        httpOnly: true,
        name: "HSID",
        path: "/",
        sameSite: "unspecified",
        secure: false,
        session: false,
        storeId: "1",
        value: "Ano_IF_I_096UfBQ7",
        id: 10,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463671.932397,
        hostOnly: false,
        httpOnly: true,
        name: "LOGIN_INFO",
        path: "/",
        sameSite: "no_restriction",
        secure: true,
        session: false,
        storeId: "1",
        value:
          "AFmmF2swRQIhALReZ54YAX3MWItv_g1ViIHHolUztGfqCU4R_LOtfQH_AiA7LZLuZzNkouBCHA8AG0B1RFbATLEzdrdV5VXBm2pkxQ:QUQ3MjNmeVNRN2U1U0JIWVctMmVLMmR2S0JhTTZqNEhLYjZMaDZjeEFmWWZTMUgyOWtIbml1akVZMWtLYm5EbHVhRC1JU0Fmeko3LVBBM0dnQmkxckVLT0ZBdkdkN0RVemhId0RiQXFZdG1aZ2tEbV9vVi02OTRQVHNJR093YlEyeGx2dHU3UGo5OGVKTVgyeXRucnlPazZMS0J5VGllV1VB",
        id: 11,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463672.517344,
        hostOnly: false,
        httpOnly: false,
        name: "PREF",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "1",
        value: "f4=4000000&f6=40000000&tz=Asia.Calcutta",
        id: 12,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463656.538103,
        hostOnly: false,
        httpOnly: false,
        name: "SAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "1",
        value: "jco0ObDPOtJHkZni/Av5P3R1pCKJxfSmer",
        id: 13,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463656.53822,
        hostOnly: false,
        httpOnly: false,
        name: "SID",
        path: "/",
        sameSite: "unspecified",
        secure: false,
        session: false,
        storeId: "1",
        value:
          "g.a000nAhWh8OH4M7oyxJau5CuRR_af8QHYWuUmLquDL7zS6ZCBrRZhx7xwmF3-QR9CiNUeSpstgACgYKAXgSARQSFQHGX2MiUTB4L_Lq49vksttfZmkjjxoVAUF8yKru2im_0HLuQGNYivZVUiUW0076",
        id: 14,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1755439674.449292,
        hostOnly: false,
        httpOnly: false,
        name: "SIDCC",
        path: "/",
        sameSite: "unspecified",
        secure: false,
        session: false,
        storeId: "1",
        value:
          "AKEyXzXVTEcBMZNUqEWgBPSAMNC0EIdaY3wRINlpYD0P5Dd3-VjRB4ZSqjv3Zrg1owXJcCkq",
        id: 15,
      },
      {
        domain: ".youtube.com",
        expirationDate: 1758463656.538022,
        hostOnly: false,
        httpOnly: true,
        name: "SSID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "1",
        value: "AwoyJ6H3TozL00ZOh",
        id: 16,
      },
    ];
    return {
      status: "loading",
      promise: (async () => {
        const agent = ytdl.createAgent(cookies);
        const info = await ytdl.getInfo(url, { agent });
        const format = ytdl.chooseFormat(info.formats, {
          quality: "lowestaudio",
          filter: "audioonly",
        });

        if (!format) {
          throw new Error("No suitable format found");
        }

        const audioStream = ytdl.downloadFromInfo(info, { format });
        const audioPath = path.join(
          "/tmp",
          `audio_${Date.now()}.${format.container}`,
        );
        const audioFile = fs.createWriteStream(audioPath);

        return new Promise<{ audioPath: string; videoInfo: VideoInfo }>(
          (resolve, reject) => {
            audioStream.pipe(audioFile);

            audioStream.on("error", (error) => {
              audioFile.close();
              fs.unlink(audioPath, () => {});
              reject(error);
            });

            audioFile.on("finish", () => {
              audioFile.close();
              resolve({
                audioPath,
                videoInfo: {
                  title: info.videoDetails.title,
                  description: info?.videoDetails?.description ?? "",
                  duration: info.videoDetails.lengthSeconds,
                  author: info.videoDetails.author.name,
                  viewCount: info.videoDetails.viewCount,
                  thumbnails: info?.videoDetails?.thumbnails,
                },
              });
            });

            audioFile.on("error", (error) => {
              audioFile.close();
              fs.unlink(audioPath, () => {});
              reject(error);
            });
          },
        );
      })(),
    };
  } catch (error) {
    console.error("Error in download function:", error);
    throw error;
  }
}
