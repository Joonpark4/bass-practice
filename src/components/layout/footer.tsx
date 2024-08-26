"use client";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "../ui/button";

export const Footer = ({
  pages,
}: {
  pages: { name: string; path: string }[];
}) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <footer className="h-full max-h-28 w-full overflow-hidden rounded-t-xl shadow-up">
      <nav className="flex h-full grow items-center justify-evenly">
        {pages.map((page) => (
          <Button
            key={page.path}
            className={cn(
              "flex h-full w-full flex-col items-center justify-center text-black",
              pathName === page.path ? "bg-accent" : "bg-card",
            )}
            onClick={() => router.push(page.path)}
          >
            <span>{page.name}</span>
          </Button>
        ))}
      </nav>
    </footer>
  );
};
