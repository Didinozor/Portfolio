import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "../components/appBar";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#231942",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#f5f5f5", // Add your desired background color here
    },
  },
});

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
