import express from "express";
import http from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { prisma } from "./lib/prisma.js"; // prisma client
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { 
  cors: { origin: "*" }
});

app.use(express.json());
app.use(cookieParser());

let onlineUsers = [];

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth?.token;
    if (!token) return next(new Error("Authentication error"));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) return next(new Error("Authentication error"));

    socket.user = user; 
    next();
  } catch (err) {
    console.error("Socket auth error:", err.message);
    next(new Error("Authentication error"));
  }
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.user.name}`);

  if (!onlineUsers.includes(socket.user.name)) onlineUsers.push(socket.user.name);
  io.emit("onlineUsers", onlineUsers);

  socket.on("sendMessage", async (msg) => {
    if (!msg) return;

    try {
      const message = await prisma.message.create({
        data: { content: msg, userId: socket.user.id },
        include: { user: true },
      });

      io.emit("newMessage", {
        id: message.id,
        text: message.content,
        user: message.user.name,
        createdAt: message.createdAt,
      });
    } catch (err) {
      console.error("Error saving message:", err);
    }
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter(u => u !== socket.user.name);
    io.emit("onlineUsers", onlineUsers);
    console.log(`User disconnected: ${socket.user.name}`);
  });
});

server.listen(3001, () => {
  console.log("Socket.IO server running on port 3001");
});
