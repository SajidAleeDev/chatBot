"use client";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import Chat from "./Chat";
import {
  ArchiveBoxArrowDownIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

type Props = {
  ChatId: string;
};

function ChatSection({ ChatId }: Props) {
  const { data: session } = useSession();
  const [messages] = useCollection(
    query(
      collection(
        db,
        "user",
        session?.user?.email!,
        "chats",
        ChatId,
        "messages"
      ),
      orderBy("createdAt", "asc")
    )
  );
  return (
    <div className="flex-1 overflow-y-auto zero:mt-[40px]  overflow-x-hidden ">
      {messages?.empty && (
        <>
          <p className=" mt-10 text-center text-white">
            Type a message to start a conversation
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto text-white mt-5 animate-bounce" />
        </>
      )}
      {messages?.docs.map((messages) => (
        <Chat key={messages.id} messasges={messages.data()} />
      ))}
    </div>
  );
}

export default ChatSection;
