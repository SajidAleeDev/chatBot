"use client";
import { db } from "@/firebase";
import { ChatBubbleOvalLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

interface Props {
  id: string;
}

function ChatRow({ id }: Props) {
  const { data: Session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(
    query(
      collection(db, "user", Session?.user?.email!, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );
  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);
  const deleteChat = async () => {
    await deleteDoc(doc(db, "user", Session?.user?.email!, "chats", id));

    router.replace("/");
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={` ChatRow justify-center ${active && "bg-gray-700/50"} `}
    >
      <ChatBubbleOvalLeftIcon className="h-5 w-5 " />
      <p
        className="  flex-1 mobile:hidden truncate
            "
      >
        {messages?.docs[messages?.docs.length - 1]?.data().text || `New Chat`}
      </p>
      <TrashIcon
        onClick={deleteChat}
        className="h-5 w-5 
         text-gray-700 hover:text-red-500 cursor-pointer
          "
      />
    </Link>
  );
}

export default ChatRow;
