"use client";

import { PlusIcon } from "@heroicons/react/24/outline";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function NewChat() {
  const { data: Session } = useSession();
  const router = useRouter();
  const CreateNewChat = async () => {
    const doc = await addDoc(
      collection(db, "user", Session?.user?.email!, "chats"),
      {
        userId: Session?.user?.email!,
        Created: serverTimestamp(),
      }
    );
    console.log(doc, "doc");

    console.log(doc.id);

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={CreateNewChat} className="border-gray-700 border ChatRow">
      <PlusIcon className="h-4 w-4 " />
      <p> New Chat</p>
    </div>
  );
}

export default NewChat;
