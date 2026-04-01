// pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Add your OpenAI API key in .env.local
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = JSON.parse(req.body);

  try {
    // Get the response from GPT-4 using OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
    });

    // Send the response back to the frontend
    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ error: "Failed to get response from OpenAI" });
  }
}