"use client";

import React from "react";

export default function MessageBubble({ message }) {
  const currentUser =
    typeof window !== "undefined"
      ? localStorage.getItem("userName")
      : null;

  const sender =
    message.user?.name ||
    message.user ||
    message.senderName ||
    message.username ||
    "";

  const isMe = sender === currentUser;

  return (
    <div className="w-full mb-3 flex">
      <div
        className={`
          max-w-[70%]
          px-4 py-2
          rounded-2xl
          text-sm
          shadow-md
          break-words
          ${isMe ? "ml-auto bg-orange-500 text-black rounded-tr-sm"
                 : "mr-auto bg-zinc-800 text-zinc-100 rounded-tl-sm"}
        `}
      >
        {!isMe && sender && (
          <div className="text-xs text-orange-400 mb-1">
            {sender}
          </div>
        )}

        <div>{message.text}</div>

        {message.createdAt && (
          <div
            className={`text-[10px] mt-1 ${
              isMe ? "text-black/70 text-left" : "text-zinc-400 text-right"
            }`}
          >
            {new Date(message.createdAt).toLocaleTimeString("fa-IR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        )}
      </div>
    </div>
  );
}
