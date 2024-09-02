"use client";
import { Fret } from "@/components/ui/Fret";

export const FretBoardComponent = ({
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
    // const audioContext = new (window.AudioContext || window.AudioContext)();
    // const oscillator = audioContext.createOscillator();
    // oscillator.type = "sine";
    // oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    // oscillator.connect(audioContext.destination);
    // oscillator.start();
    // setTimeout(() => oscillator.stop(), 500); // 0.5초 동안 재생
  };

  // 각 줄과 프렛에 대한 주파수 계산
  const calculateFrequency = (baseFreq: number, fret: number) => {
    return baseFreq * Math.pow(2, fret / 12);
  };

  return (
    <>
      <div className="relative grid w-full grid-cols-fret border-4 border-black">
        {Object.keys(fretCodes).map((string) =>
          fretCodes[string as keyof typeof fretCodes].map((code, index) => {
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
          }),
        )}
        <div className="pointer-events-none absolute top-1/2 col-span-full m-0 grid w-full -translate-y-[55%] grid-cols-fret p-0">
          {Array.from({ length: 13 }).map((_, index) => (
            <div
              key={index}
              className="m-0 flex items-center justify-center p-0 text-3xl font-black text-white"
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
      <div className="grid w-full grid-cols-fret border-4 border-white">
        {Array.from({ length: 13 }).map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            {index === 3 || index === 5 || index === 7 || index === 9
              ? "●"
              : index === 12
                ? "●●"
                : ""}
          </div>
        ))}
      </div>
    </>
  );
};

interface FretCodes {
  E: string[];
  A: string[];
  D: string[];
  G: string[];
}

export const fretCodes: FretCodes = {
  G: [
    "G3",
    "G#3",
    "A4",
    "A#4",
    "B4",
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
  ],
  D: [
    "D2",
    "D#2",
    "E2",
    "F2",
    "F#2",
    "G2",
    "G#2",
    "A3",
    "A#3",
    "B3",
    "C3",
    "C#3",
    "D3",
  ],
  A: [
    "A2",
    "A#2",
    "B2",
    "C2",
    "C#2",
    "D2",
    "D#2",
    "E2",
    "F2",
    "F#2",
    "G2",
    "G#2",
    "A3",
  ],
  E: [
    "E1",
    "F1",
    "F#1",
    "G1",
    "G#1",
    "A2",
    "A#2",
    "B2",
    "C2",
    "C#2",
    "D2",
    "D#2",
    "E2",
  ],
};
