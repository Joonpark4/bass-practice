"use client";
import { Fret } from "@/components/ui/Fret";
import { fretCodes } from "@/components/ui/FretBoard";

export const VerticalFretBoardComponent = ({
  onClick,
}: {
  onClick: (code: string) => void;
}) => {
  const baseFrequencies = {
    E: 41.2, // 4번 줄 (E)
    A: 55.0, // 3번 줄 (A)
    D: 73.4, // 2번 줄 (D)
    G: 98.0, // 1번 줄 (G)
  };

  // 프렛 클릭 시 실행될 함수
  const handleFretClick = (frequency: number, code: string) => {
    console.log(`Fret code: ${code}`);
    onClick(code);
  };

  // 각 줄과 프렛에 대한 주파수 계산
  const calculateFrequency = (baseFreq: number, fret: number) => {
    return baseFreq * Math.pow(2, fret / 12);
  };

  return (
    <>
      <div className="flex h-full flex-col justify-center border-4 border-white">
        {Array.from({ length: 13 }).map((_, index) => (
          <div
            key={index}
            className="flex h-[40px] items-center justify-center"
          >
            {index === 3 || index === 5 || index === 7 || index === 9
              ? "●"
              : index === 12
                ? "●●"
                : ""}
          </div>
        ))}
      </div>
      <div className="relative flex w-full max-w-48 flex-row-reverse self-center border-4 border-black">
        {Object.keys(fretCodes).map((string) => (
          <div key={string} className="flex w-full max-w-12 flex-col">
            {fretCodes[string as keyof typeof fretCodes].map((code, index) => {
              const baseFreq =
                baseFrequencies[string as keyof typeof baseFrequencies];
              const frequency = calculateFrequency(baseFreq, index);
              return (
                <Fret
                  key={`${string}-${index}`}
                  code={code}
                  frequency={frequency}
                  onClick={handleFretClick}
                  title={index}
                />
              );
            })}
          </div>
        ))}
        <div className="pointer-events-none absolute left-1/2 top-0 flex h-full flex-col justify-center">
          {Array.from({ length: 13 }).map((_, index) => (
            <div
              key={index}
              className="flex h-[40px] -translate-x-1/2 items-center justify-center text-4xl text-white"
            >
              {index === 3 || index === 5 || index === 7 || index === 9
                ? "●"
                : index === 12
                  ? "●●"
                  : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
