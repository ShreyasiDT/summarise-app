"use client";

import { Button } from "~/components/ui/button";

import { useRouter } from "next/navigation";

export const Error = () => {
  const router = useRouter();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1>There was an error processing the video</h1>
      <Button onClick={() => router.back()}>Go back</Button>
    </div>
  );
};
