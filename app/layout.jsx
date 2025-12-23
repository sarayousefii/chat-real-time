import { Geist, Geist_Mono } from "next/font/google";
import ReduxProvider from "../src/providers/ReduxProvider";
import '../styles/globals.css';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Chat Real-Time",
  description: "Real-time chat with Next.js 16 and Socket.IO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          bg-gray-900 text-gray-100
        `}
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
