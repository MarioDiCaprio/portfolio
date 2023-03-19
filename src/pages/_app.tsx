import type { AppProps } from 'next/app';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {theme} from "../theme";


export const GlobalCSS = createGlobalStyle`
  // Google Fonts: "Source Code Pro"
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
  // Google Fonts: "Public Sans"
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap');
  // Google Fonts: "Plaster"
  @import url('https://fonts.googleapis.com/css2?family=Plaster&display=swap');


  html, body {
    padding: 0;
    margin: 0;
    font-family: "Public Sans", sans-serif;
    background: ${theme.palette.maastrichtBlue};
    color: ${theme.palette.coolGrey};
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;

    &::selection, &::-moz-selection {
      background: rgba(29, 255, 202, 0.8);
      color: #ffffff
    }
  }

`;


// noinspection JSUnusedGlobalSymbols
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalCSS theme={theme} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
