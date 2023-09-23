import { serverTimestamp } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { Configuration, OpenAIApi } from "openai";

import { adminDb } from "@/firebaseAdmin";
import getSideProps from "@/lib/queryApi";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(`here is the request`, req.body);

  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "prompt is required" });
  }
  if (!chatId) {
    res.status(400).json({ answer: "chatId is required fully" });
  }

  console.log("here is my message");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  console.log("here i sthe key", process.env.OPENAI_API_KEY);
  console.log({ prompt, chatId, model });

  const resopnd = await getSideProps(prompt, chatId, model);
  const message: Message = {
    text: resopnd || "Sorry, I don't understand that yet.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGpt",
      name: "ChatGpt",
      avatar: "https://links.papareact.com/89k",
    },
  };
  await adminDb
    .collection("user")
    .doc(session?.user?.email!)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);
  res.status(200).json({ answer: message.text });
  console.log(message.text, "message here");
}
