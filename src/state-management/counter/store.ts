import { create } from "zustand";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () =>
    set((store) => ({
      counter: store.counter + 1,
    })),
  reset: () => set((store) => ({ max: 10, counter: 0 })),
}));

export default useCounterStore;
