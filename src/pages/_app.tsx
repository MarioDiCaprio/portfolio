import '../styles/globals.sass';
import type { AppProps } from 'next/app';
import {ThemeProvider} from "styled-components";
import {theme} from "../theme";


// noinspection JSUnusedGlobalSymbols
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
