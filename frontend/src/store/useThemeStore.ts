import { create } from "zustand";

type Store = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

export const useThemeStore = create<Store>()((set) => ({
  theme: "bumblebee",
  setTheme: (newTheme) => set({ theme: newTheme }),
}));
