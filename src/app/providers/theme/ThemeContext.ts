import { createContext } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextOptions {
  theme?: Theme,
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextOptions>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'