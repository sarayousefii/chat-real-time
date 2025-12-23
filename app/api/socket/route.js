// app/api/socket/route.ts
import { Server } from "socket.io";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

let io= null;

export async function GET(req) {
  if (io) {
    return NextResponse.json({ message: "Socket server already running" });
  }

  const res = new NextResponse();
  io = new Server(res.socket , {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("No token provided"));

    try {
      const user = verifyJwt(token);
      socket.data.user = user;
      next();
    } catch {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket) => {
    const user = socket.data.user;
    console.log(`User connected: ${user.name} (${user.id})`);

    socket.on("send_message", async (content) => {
      try {
        const message = await prisma.message.create({
          data: {
            content,
            userId: user.id,
          },
          include: {
            user: { select: { id: true, name: true } },
          },
        });
        io?.emit("new_message", message);
      } catch (err) {
        console.error("Failed to create message:", err);
      }
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${user.name} (${user.id})`);
    });
  });

  return NextResponse.json({ message: "Socket server started" });
}
