import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {ThemeProvider} from "styled-components";
import {theme} from "../theme";


// noinspection JSUnusedGlobalSymbols
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}
