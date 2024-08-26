"use client";
import { useState, useEffect, useRef } from "react";
import { FretBoardComponent } from "@/components/ui/FretBoard";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState("easy");
  const [questionNote, setQuestionNote] = useState("");
  const [answerNote, setAnswerNote] = useState("");
  const [playText, setPlayText] = useState("Play ▶️");
  const [isCorrectColor, setIsCorrectColor] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const easyNote = ["A", "B", "C", "D", "E", "F", "G"];
  const hardNote = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "A#",
    "C#",
    "D#",
    "F#",
    "G#",
  ];
  const veryHardNote = [
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
    "D#3",
    "E3",
    "F3",
    "F#3",
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
  ];

  // 인터벌 참조를 저장할 useRef
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      // 시작하자마자 첫 문제를 생성
      generateQuestionNote();

      // Qeustion Note를 무작위로 계속해서 생성
      intervalRef.current = window.setInterval(() => {
        generateQuestionNote();
      }, 3000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // 컴포넌트 언마운트 시나 isPlaying이 false로 변경될 때 인터벌을 정리
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying, mode]); // mode도 의존성에 추가

  // 새로운 문제를 생성하는 함수
  const generateQuestionNote = () => {
    if (mode === "easy") {
      setQuestionNote(easyNote[Math.floor(Math.random() * easyNote.length)]);
    } else if (mode === "hard") {
      setQuestionNote(hardNote[Math.floor(Math.random() * hardNote.length)]);
    } else {
      setQuestionNote(
        veryHardNote[Math.floor(Math.random() * veryHardNote.length)],
      );
    }
  };

  // 플레이 버튼을 눌렀을 때
  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setPlayText("Play ▶️");
      setQuestionNote("");
      setAnswerNote("");
    } else {
      setIsPlaying(true);
      setPlayText("Stop ⏹️");
    }
  };

  const handleAnswerClick = (code: string) => {
    if (mode === "easy") {
      // 이지모드 일때는 code값의 맨 첫 글자 하나만 비교
      if (questionNote === code[0]) {
        setAnswerNote(code[0]);
        setIsCorrectColor("bg-green-400");
      } else {
        setAnswerNote(code[0]);
        setIsCorrectColor("bg-red-400");
      }
    }
    if (mode === "hard") {
      // 하드모드 일때는 맨 뒤에 숫자가 있을 때 숫자만 없애고 비교
      if (questionNote === code.replace(/[0-9]/g, "")) {
        setAnswerNote(code.replace(/[0-9]/g, ""));
        setIsCorrectColor("bg-green-400");
      } else {
        setAnswerNote(code.replace(/[0-9]/g, ""));
        setIsCorrectColor("bg-red-400");
      }
    }
    if (mode === "veryHard") {
      // 매우 어려운 모드일때는 code값을 정확하게 비교
      if (questionNote === code) {
        setAnswerNote(code);
        setIsCorrectColor("bg-green-400");
      } else {
        setAnswerNote(code);
        setIsCorrectColor("bg-red-400");
      }
    }

    // 컴포넌트가 깜빡이도록 설정
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // 0.5초 후에 컴포넌트를 숨김
  };

  return (
    <div className="centered w-full flex-col gap-3">
      <div className="flex w-full justify-start gap-3">
        <div className="flex min-w-[210px] flex-col gap-2 p-2">
          <p className="mb-2 text-center text-lg font-semibold">
            주어진 코드를 찾아봐요
          </p>
          <div className="flex w-full justify-between gap-2">
            <div className="flex w-full justify-between gap-2">
              <button
                className={`w-full cursor-pointer rounded-md p-1 text-base text-white ${
                  mode === "easy" ? "bg-blue-400" : "bg-gray-400"
                }`}
                onClick={() => {
                  if (!isPlaying) setMode("easy");
                }}
              >
                쉬움
              </button>
              <button
                className={`w-full cursor-pointer rounded-md p-1 text-base text-white ${
                  mode === "hard" ? "bg-blue-400" : "bg-gray-400"
                }`}
                onClick={() => {
                  if (!isPlaying) setMode("hard");
                }}
              >
                어려움
              </button>
              <button
                className={`w-full cursor-pointer rounded-md p-1 text-base text-white ${
                  mode === "veryHard" ? "bg-blue-400" : "bg-gray-400"
                }`}
                onClick={() => {
                  if (!isPlaying) setMode("veryHard");
                }}
              >
                매우
                <br />
                어려움
              </button>
            </div>
          </div>
          <div className="flex w-full justify-between gap-2">
            <button
              className="w-full cursor-pointer rounded-md bg-green-400 p-1 text-2xl text-white"
              onClick={handlePlay}
            >
              {playText}
            </button>
            <button className="w-full cursor-pointer rounded-md bg-yellow-600 p-1 text-xl text-white">
              Warning
            </button>
          </div>
        </div>
        <div className="centered w-full min-w-[240px] max-w-72 flex-col">
          <div className="flex w-full max-w-72 gap-5 p-3">
            <div className="centered relative aspect-square h-full w-full overflow-visible border-2 border-black">
              <div className=" absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[55%] rounded-lg bg-white p-1 text-xl">
                문제
              </div>
              <span className="text-5xl">{questionNote}</span>
            </div>
            <div className="centered relative aspect-square h-full w-full overflow-visible border-2 border-black">
              <div className=" absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[55%] rounded-lg bg-white p-1 text-xl">
                답
              </div>
              {isVisible && (
                <div
                  className={cn(
                    " absolute left-0 top-0 h-full w-full bg-opacity-60",
                    isCorrectColor,
                  )}
                ></div>
              )}
              <span className="text-5xl">{answerNote}</span>
            </div>
          </div>
        </div>
      </div>

      <FretBoardComponent onClick={handleAnswerClick} />
    </div>
  );
}
