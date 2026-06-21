import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SoundProvider } from "@/components/SoundProvider";
import GlobalGear from "@/components/GlobalGear";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Industrial Robotic Arm | Team Ramanujan",
  description: "From Concept to Prototype — Engineering an Intelligent Pick-and-Place Robotic System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-white text-gray-900 selection:bg-[#F4C430]/30 selection:text-black`}
      >
        <SoundProvider>
          <GlobalGear />
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}
