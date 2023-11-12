import {createTheme} from "@mui/material";


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
    }
});
