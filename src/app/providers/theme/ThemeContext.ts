import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_theme_light',
  DARK = 'app_theme_dark',
  ORANGE = 'app_theme_orange',
}

interface ThemeContextOptions {
  theme?: Theme,
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextOptions>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
