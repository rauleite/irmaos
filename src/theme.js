import { red } from '@material-ui/core/colors';
import { isServer } from './utils';

export const theme = Object.freeze({
  default: Object.freeze({}),
  a: Object.freeze({
    // palette: {
    primary: {
      main: '#00758F',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  }),

});

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
