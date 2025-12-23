"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!name || !email || !password) return alert("All fields are required");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);
        router.push("/chat");
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f111a] px-4">
      <Card className="w-full max-w-md border border-orange-500/20 bg-[#1e1f29]">
        <CardHeader>
          <CardTitle className="text-center text-orange-400">Register</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full h-12 rounded-lg" />
          <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full h-12 rounded-lg" />
          <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full h-12 rounded-lg" />
          <Button onClick={handleRegister} className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-black">Register</Button>
        </CardContent>
      </Card>
    </div>
  );
}
