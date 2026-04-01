import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in .env.local
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = JSON.parse(req.body); // Read user message from the body

  try {
    // Sending the user message to the OpenAI API for chat completion
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages: [{ role: "user", content: message }],
    });

    // Return the bot's response
    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    res.status(500).json({ error: "Failed to get response from OpenAI" });
  }
}