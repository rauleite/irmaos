import { useState } from 'react';

import {
  cyan, red, purple, indigo,
} from '@material-ui/core/colors';
import { isServer } from './utils';

export const THEMES = Object.freeze({
  default: Object.freeze({
    palette: {
      primary: {
        main: indigo[500],
      },
    },
  }),
  a: Object.freeze({
    palette: {
      primary: {
        main: cyan[700],
      },
      secondary: {
        main: purple[500],
      },
      error: {
        main: red.A400,
      },
    },
  }),

});

export const THEME_TYPE = Object.freeze({
  dark: 'dark',
  light: 'light',
});

const systemColorScheme = () => {
  if (!isServer()) {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      return THEME_TYPE.dark;
    }
  }
  return THEME_TYPE.light;
};

export const useTheme = () => {
  const [theme, setTheme] = useState(/* Persisted theme || */ THEMES.a);
  const changeTheme = (currentTheme, newTheme) => {
    if (currentTheme !== newTheme) {
      return newTheme;
    }
  };
  const customSetTheme = (newTheme) => {
    const themeChanged = changeTheme(theme, newTheme);
    if (themeChanged) {
      setTheme(themeChanged);
    }
  };
  return [theme, customSetTheme];
};

export const useThemeType = () => {
  const [themeType, setTheme] = useState(
  /* Persisted theme || */ systemColorScheme() || THEME_TYPE.light,
  );
  const toggleThemeType = () => (
    setTheme(
      themeType === THEME_TYPE.light ? THEME_TYPE.dark : THEME_TYPE.light,
    )
  );
  return [themeType, toggleThemeType];
};
