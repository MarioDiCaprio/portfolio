import {createTheme, css} from "@mui/material";


export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FF0F7BFF'
        },
        secondary: {
            main: '#ffea61',
        },
        info: {
            main: '#ff2c3e'
        },
        text: {
            primary: '#272839',
            secondary: '#7C7D8A',
        },
        background: {
            default: '#ffffff'
        },
    },
    typography: {
        fontFamily: `Barlow, sans-serif`
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: theme => css`
              ::selection {
                color: ${theme.palette.background.default};
                background: ${theme.palette.primary.main};
              }
              @font-face {
                font-family: "Barlow";
                src:
                    url("/fonts/Barlow/Barlow-Black.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-Bold.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-BoldItalic.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-ExtraBold.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-ExtraBoldItalic.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-ExtraLight.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-ExtraLightItalic.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-Italic.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-Light.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-LightItalic.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-Medium.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-MediumItalic.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-Regular.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-SemiBold.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-SemiBoldItalic.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-Thin.ttf") format("truetype"),
                    url("/fonts/Barlow/Barlow-ThinItalic.ttf") format("truetype")
                ;
                font-weight: 900;
                font-style: normal;  
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-BlackItalic.ttf") format("truetype");
                font-weight: 900;
                font-style: italic;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-ExtraBold.ttf") format("truetype");
                font-weight: 800;
                font-style: normal;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-ExtraBoldItalic.ttf") format("truetype");
                font-weight: 800;
                font-style: italic;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-Bold.ttf") format("truetype");
                font-weight: 700;
                font-style: normal;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-BoldItalic.ttf") format("truetype");
                font-weight: 600;
                font-style: italic;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-Semibold.ttf") format("truetype");
                font-weight: 600;
                font-style: normal;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-SemiBoldItalic.ttf") format("truetype");
                font-weight: 600;
                font-style: italic;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-Medium.ttf") format("truetype");
                font-weight: 500;
                font-style: normal;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-MediumItalic.ttf") format("truetype");
                font-weight: 500;
                font-style: italic;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-Regular.ttf") format("truetype");
                font-weight: 400;
                font-style: normal;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-Italic.ttf") format("truetype");
                font-weight: 400;
                font-style: italic;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-Light.ttf") format("truetype");
                font-weight: 300;
                font-style: normal;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-LightItalic.ttf") format("truetype");
                font-weight: 300;
                font-style: italic;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-ExtraLight.ttf") format("truetype");
                font-weight: 200;
                font-style: normal;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-ExtraLightItalic.ttf") format("truetype");
                font-weight: 200;
                font-style: italic;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-Thin.ttf") format("truetype");
                font-weight: 100;
                font-style: normal;
              }
              @font-face {
                font-family: "Barlow";
                src: url("/fonts/Barlow/Barlow-ThinItalic.ttf") format("truetype");
                font-weight: 100;
                font-style: italic;
              }
            `
        }
    }
});
