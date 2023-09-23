"use client";
import { db } from "@/firebase";
import NewChat from "./NewChat";

import { collection, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
import ModelSec from "./ModelSec";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading] = useCollection(
    query(collection(db, "user", session?.user?.email!, "chats"))
  );

  console.log(chats, "chats");

  // const [chats, loading] = useCollection(
  //   query(collection(db, "user", session?.user?.email || "", "chats"))
  // );
  // const [chats, loading] = useCollection(
  //   query(collection(db!, "user", session?.user?.email!, "chats"))
  // );
  // console.log(session, "session");

  // const [chats, loading] = useCollection(
  //   query(collection(db, "user", session?.user?.email!, "chats"))
  // );
  return (
    <div
      className=" p-2 flex flex-col h-screen bg-[#202123]
  "
    >
      <div className="flex-1 ">
        <NewChat />

        <div className=" flex flex-col space-y-2 my-2 ">
          {loading && (
            <div className="animate-pulse text-center text-white">
              <p>... loading </p>
            </div>
          )}
          {chats?.docs.map((chat: any) => {
            return <ChatRow id={chat.id} />;
          })}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile"
          className="rounded-full h-12 w-12
         mx-auto cursor-pointer mb-2 hover:opacity-80
        "
        />
      )}
    </div>
  );
}

export default SideBar;
