import { NextRequest, NextResponse } from "next/server";
import { redis } from "~/lib/redis";

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Video ID is required" },
        { status: 400 },
      );
    }

    await redis.del(id);

    return NextResponse.json(
      { message: "Cache cleared successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error clearing cache:", error);
    return NextResponse.json(
      { error: "An error occurred while clearing the cache" },
      { status: 500 },
    );
  }
}
