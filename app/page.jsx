"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4" dir="rtl">
      <Card className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-md text-center">
        <CardHeader>
          <CardTitle className="text-white text-2xl font-bold mb-2">
            خوش آمدید به چت واقعی
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 mb-6">
          با دوستان خود به‌صورت آنلاین گپ بزنید 
        </CardContent>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => router.push("/login")}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            ورود
          </Button>
          <Button
            onClick={() => router.push("/register")}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            ثبت‌نام
          </Button>
        </div>
      </Card>
    </div>
  );
}
