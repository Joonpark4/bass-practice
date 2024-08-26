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
    <html lang="en" className="centered h-full">
      <body
        className={cn(
          "centered h-dvh max-h-dvh w-full max-w-4xl flex-col",
          inter.className,
        )}
      >
        <main className="centered h-full w-full flex-1 flex-col py-5">
          {children}
        </main>
      </body>
    </html>
  );
}
