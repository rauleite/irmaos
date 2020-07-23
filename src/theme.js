import {
  cyan, amber, red, purple, indigo,
} from '@material-ui/core/colors';
import { isServer } from './utils';

export const theme = Object.freeze({
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

export const currentTheme = {
  theme: theme.a,
};

export const themeType = Object.freeze({
  dark: 'dark',
  light: 'light',
});

export const systemColorScheme = () => {
  if (!isServer()) {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      return themeType.dark;
    }
  }
  return themeType.light;
};
