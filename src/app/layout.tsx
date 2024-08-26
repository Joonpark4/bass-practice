import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("centered w-full flex-col", inter.className)}>
        <div className="centered h-dvh max-h-dvh w-full max-w-[425px] flex-col rounded-lg border-2">
          {children}
        </div>
      </body>
    </html>
  );
}
