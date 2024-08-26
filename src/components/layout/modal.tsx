"use client";
import useModalStore from "@/store/modal";

export const WarningModalComponent = () => {
  const { on, close } = useModalStore();
  if (!on) return null; // 모달이 닫혀있을 경우 렌더링하지 않음

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      onClick={close}
    >
      {/* 모달 배경 */}
      <div
        className="relative w-full max-w-96 rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute right-3 top-3 text-xl text-gray-500 hover:text-gray-700"
          onClick={close}
        >
          &times;
        </button>
        {/* 모달 내용 */}
        <h2 className="mb-4 text-xl font-bold">경고 ⚠️⚠️⚠️</h2>
        <p className="text-gray-600">
          교무실에 아이들이 많을 때는 사용하지 마세요.
        </p>
      </div>
    </div>
  );
};
