import React, { useEffect } from 'react';
// import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { ApolloProvider } from '@apollo/client'
// import { useApollo } from '../apollo/client'

import {
  useTheme, useThemeType, THEMES,
} from '../src/theme';
// import MainAppBar from "../components/MainAppBar";
// import DashboardAppBar from "../components/dashboard/DashboardAppBar";

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [themeType, toggleThemeType] = useThemeType();
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const onChange = () => {
    toggleThemeType();
  };

  const onChangeThemeA = () => {
    setTheme(THEMES.a);
  };

  const onChangeThemeDefault = () => {
    setTheme(THEMES.default);
  };

  return (
    <>
      <Head>
        <title>Canvas</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta
          name="description"
          content="make your Next.js application work offline using service workers via Google's workbox"
        />
      </Head>

      <ThemeProvider theme={createMuiTheme({
        palette: { ...theme.palette, type: themeType },
      })}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <MainAppBar> */}
        <br />
        <br />
        <br />
        <button type="button" onClick={onChange}>Luz</button>
        <br />
        <button type="button" onClick={onChangeThemeA}>Palette A</button>
        <br />
        <button type="button" onClick={onChangeThemeDefault}>Palette Def</button>
        <CssBaseline />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        {/* </MainAppBar> */}

      </ThemeProvider>
    </>
  );
}
// }
