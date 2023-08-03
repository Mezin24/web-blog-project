import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_theme_light',
  DARK = 'app_theme_dark',
}

interface ThemeContextOptions {
  theme?: Theme,
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextOptions>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
