import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ReactLenis } from '@/app/utils/lenis';
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JockaMT - Landing Page",
  description: "My personal landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ scrollBehavior: "smooth", msScrollbarBaseColor: "#CC0000", scrollbarColor: "#CC0000 #121820", scrollbarWidth: "thin" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-900 antialiased scroll-smooth`}
      >
        <ReactLenis
          options={{ 
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
