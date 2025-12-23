"use client";

import React, { useEffect, useState, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import MessageBubble from "@/components/MessageBubble";
import ChatInput from "@/components/ChatInput";
import { useSocket } from "@/hooks/useSocket";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useSocket();
  const messagesEndRef = useRef(null);

  const currentUser =
    typeof window !== "undefined"
      ? localStorage.getItem("userName")
      : null;

  useEffect(() => {
    if (!socket) return;

    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) =>
        console.error("Error fetching messages:", err)
      );

    socket.on("onlineUsers", setOnlineUsers);

    socket.on("newMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("onlineUsers");
      socket.off("newMessage");
    };
  }, [socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex h-screen bg-[#0f111a]">
      <Sidebar
        onlineUsers={onlineUsers}
        currentUser={currentUser}
      />

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4">
          <ChatInput socket={socket} />
        </div>
      </div>
    </div>
  );
}
