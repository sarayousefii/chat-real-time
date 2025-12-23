// app/api/messages/route.js
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      include: { user: true },
      orderBy: { createdAt: "asc" },
    });

    return new Response(JSON.stringify(messages.map(m => ({
      id: m.id,
      text: m.content,
      user: m.user.name,
      createdAt: m.createdAt
    }))), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch messages" }), { status: 500 });
  }
}
