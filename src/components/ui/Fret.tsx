import { cn } from "@/lib/utils";

// 프렛 컴포넌트
interface FretProps {
  code: string;
  frequency: number;
  title: number;
  onClick: (frequency: number, code: string) => void;
}

export const Fret = ({ code, onClick, title, frequency }: FretProps) => {
  return (
    <div
      className={cn(
        "centered h-[40px] w-full max-w-12 cursor-pointer border border-l-4 border-white border-l-gray-400 text-center text-white sm:max-w-none",
        title === 0 ? "bg-black" : "bg-[#914b2f]",
      )}
      onClick={() => onClick(frequency, code)}
    ></div>
  );
};
