import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { audio, language } = await request.json();

    if (!audio) {
      return NextResponse.json({ error: "Missing audio" }, { status: 400 });
    }

    // Call WisprFlow API
    const wisprResponse = await fetch("https://platform-api.wisprflow.ai/api/v1/dash/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.WISPRFLOW_API_KEY}`,
      },
      body: JSON.stringify({
        audio: audio,
        language: language || ["en"],
        // context can be omitted for now
      }),
    });

    if (!wisprResponse.ok) {
      const errorBody = await wisprResponse.text();
      return NextResponse.json(
        { error: "Transcription failed", details: errorBody },
        { status: 500 }
      );
    }

    const data = await wisprResponse.json();
    const transcript = data.transcript ?? "";

    return NextResponse.json({ transcript });
  } catch (error) {
    console.error("Transcription error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}