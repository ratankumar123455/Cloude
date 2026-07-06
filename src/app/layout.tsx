import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sutertai Private Limited | Generative AI for Image & Video",
  description:
    "Sutertai builds generative AI products for text-to-image and text-to-video generation, helping creators and businesses turn ideas into visuals in seconds.",
  keywords: [
    "Sutertai",
    "generative AI",
    "text to image",
    "text to video",
    "AI image generation",
    "AI video generation",
  ],
  openGraph: {
    title: "Sutertai Private Limited | Generative AI for Image & Video",
    description:
      "Turn text into stunning images and videos with Sutertai's generative AI platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05050a] text-zinc-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
