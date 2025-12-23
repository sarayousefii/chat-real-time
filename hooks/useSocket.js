import { io } from "socket.io-client";
import { useEffect, useState } from "react";

export const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const s = io("http://localhost:3001", {
      auth: { token },
      transports: ["websocket", "polling"], // optional
    });

    s.on("connect_error", (err) => {
      console.error("❌ Socket error:", err.message);
    });

    setSocket(s);

    return () => s.disconnect();
  }, []);

  return socket;
};
