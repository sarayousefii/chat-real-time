let onlineUsers = []; 
export async function GET() {
  return new Response(JSON.stringify(onlineUsers), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export function setOnlineUsers(users) {
  onlineUsers = users;
}
