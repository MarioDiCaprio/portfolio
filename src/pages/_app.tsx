import type { AppProps } from 'next/app';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../theme";
import Head from "next/head";


// noinspection JSUnusedGlobalSymbols
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Mario Di Caprio</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
