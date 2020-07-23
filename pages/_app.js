import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme, themeType, systemColorScheme } from '../src/theme';
// import MainAppBar from "../components/MainAppBar";
// import DashboardAppBar from "../components/dashboard/DashboardAppBar";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      themeType: systemColorScheme(),
      theme: theme.a,
    };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

   onChange = () => {
     this.setState((state) => (
       state.themeType === themeType.light
         ? { themeType: themeType.dark }
         : { themeType: themeType.light }
     ));
   }

   changeTheme = (state, themeName) => {
     if (state.theme !== themeName) {
       return { theme: themeName };
     }
   }

   onChangeTheme1 = () => {
     this.setState((state) => this.changeTheme(state, theme.a));
   }

  onChangeThemeDefault = () => {
    this.setState((state) => this.changeTheme(state, theme.default));
  };

  render() {
    const { Component, pageProps } = this.props;

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
          palette: { ...this.state.theme, type: this.state.themeType },
        })}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/* <MainAppBar> */}
          <br />
          <br />
          <br />
          <br />
          <button type="button" onClick={this.onChange}>Luz</button>
          <br />
          <button type="button" onClick={this.onChangeTheme1}>Palette 1</button>
          <br />
          <button type="button" onClick={this.onChangeThemeDefault}>Palette Def</button>
          <CssBaseline />
          <Component {...pageProps} />
          {/* </MainAppBar> */}

        </ThemeProvider>
      </>
    );
  }
}
