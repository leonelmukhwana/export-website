import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // cheaper & fast (recommended)
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for an agricultural export company called Wendofresh in Kenya.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { reply: "Sorry, I'm having trouble right now." },
      { status: 500 }
    );
  }
}