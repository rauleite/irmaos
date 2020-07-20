import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import data from '../src/data-mock/dashboard-label';

// import MainAppBar from "../components/MainAppBar";
// import DashboardAppBar from "../components/dashboard/DashboardAppBar";

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>{data.page.htmlTitle}</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192.png" />
          <meta
            name="description"
            content="make your Next.js application work offline using service workers via Google's workbox"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/* <MainAppBar> */}
          <CssBaseline />
          <Component {...pageProps} />
          {/* </MainAppBar> */}
        </ThemeProvider>
      </>
    );
  }
}
