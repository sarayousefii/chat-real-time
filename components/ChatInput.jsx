"use client";

import React, { useState } from "react";

export default function ChatInput({ socket }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    socket.emit("sendMessage", text);
    setText("");
  };

  return (
    <div className="mt-2 flex items-center gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="یادداشت کنید ..."
        className="flex-1 h-12 px-4 rounded-full bg-gray-800 text-orange-400 placeholder-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        onClick={handleSend}
        className="h-12 px-6 rounded-full bg-orange-500 text-black hover:bg-orange-600"
      >
        ارسال
      </button>
    </div>
  );
}
