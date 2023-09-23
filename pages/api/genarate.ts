import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

type Response = {
  text: string;
};
interface GeneratedResponse extends NextApiRequest {
  body: {
    prompt: string;
  };
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: GeneratedResponse,
  res: NextApiResponse<Response>
) {
  const prompt = req.body.prompt;
  if (!prompt || prompt === "") {
    return res.status(400).json({ text: "prompt is required" });
  }
  const aiResult = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.9,
    stream: true,

    max_tokens: 2048,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
  });

  const response =
    aiResult.data.choices[0].text?.trim() ||
    "Sorry, I don't understand that yet.";
  res.status(200).json({ text: response });
}
