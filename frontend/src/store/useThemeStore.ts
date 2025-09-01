import { create } from "zustand";

type Store = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

export const useThemeStore = create<Store>()((set) => ({
  theme: localStorage.getItem("theme") || "bumblebee",
  setTheme: (newTheme) => {
    localStorage.setItem("theme", newTheme);
    set({ theme: newTheme });
  },
}));
