import { create } from "zustand";

interface ModalState {
  on: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const useModalStore = create<ModalState>()((set) => ({
  on: false,
  // toggle 메서드는 현재 상태를 반전시킵니다.
  toggle: () => set((state) => ({ on: !state.on })),
  // open 메서드는 모달을 켭니다.
  open: () => set({ on: true }),
  // close 메서드는 모달을 끕니다.
  close: () => set({ on: false }),
}));

export default useModalStore;
