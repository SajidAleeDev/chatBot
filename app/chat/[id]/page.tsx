import ChatInput from "@/Components/ChatInput";
import ChatSection from "@/Components/ChatSection";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

function ChatPage({ params: { id } }: Props) {
  return (
    <>
      <div className="flex flex-col h-screen  overflow-hidden">
        <ChatSection ChatId={id} />

        <ChatInput ChatId={id} />
      </div>
    </>
  );
}

export default ChatPage;
