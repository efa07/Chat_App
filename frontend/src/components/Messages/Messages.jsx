import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../Hooks/useGetMessages";
import { ClipLoader } from "react-spinners";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const scrollRef = useRef(null);

  // Smooth scroll to bottom on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <ClipLoader color="#3b82f6" />
        </div>
      ) : !messages || messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">No messages yet</p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
          <div ref={scrollRef} /> {/* Anchor to scroll to */}
        </>
      )}
    </div>
  );
};

export default Messages;
