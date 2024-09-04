import { ColorSchemeName, useColorScheme } from "react-native";
import { create } from "zustand";

interface ThemeState {
  theme: ColorSchemeName;
  setTheme: (theme: ColorSchemeName) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: null,
  setTheme: (theme: ColorSchemeName) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? "dark" : "light" })),
}));
