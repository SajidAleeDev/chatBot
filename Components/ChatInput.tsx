"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React, { FormEvent, useEffect, useState } from "react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  ChatId: string;
};

function ChatInput({ ChatId }: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");
  // const { data: model, mutate: setmodel } = useSWR("model", {
  //   fallbackData: "text-davinci-003",
  // });
  // useSWR to get the model
  const model = "gpt-3.5-turbo";

  const SendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image!,
      },
    };
    await addDoc(
      collection(
        db,
        "user",
        session?.user?.email!,
        "chats",
        ChatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("ChatGpt is thinking...");

    try {
      const response = await fetch("/api/askQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          chatId: ChatId,
          model,
          session,
        }),
      });

      console.log({ response });
    } catch (error) {
      console.error({ error });
    }
    toast.dismiss(notification);
    toast.success("ChatGpt Responded !!");
  };

  // 1 minute timeout
  const timeout = setTimeout(() => {
    router.push("/");
  }, 60000);
  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg  text-sm ">
      {" "}
      <form className="p-5 space-x-5 flex " onSubmit={SendMessage}>
        <input
          type="text"
          value={prompt}
          className="focus:outline-none bg-transparent flex-1 disabled:corsur-not-allowed disabled:text-gray-300"
          onChange={(e) => setPrompt(e.target.value)}
          disabled={!session}
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className=" bg-[#11A375] hover:opacity-50 text-white font-bold  px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
        </button>
      </form>
      <div>{/*model Selecton*/}</div>
    </div>
  );
}

export default ChatInput;
