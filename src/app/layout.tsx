import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WarningModalComponent } from "@/components/layout/modal";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bass Note Trainer",
  description: "A simple bass note trainer with Gorae.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="centered h-full w-full">
      <body
        className={cn(
          "centered relative h-dvh max-h-dvh w-full flex-col sm:max-w-4xl",
          inter.className,
        )}
      >
        <main className="flex h-full w-full flex-1 flex-col items-center justify-start py-2 sm:justify-center sm:py-5">
          {children}
        </main>
        <WarningModalComponent />
        <Analytics />
      </body>
    </html>
  );
}
