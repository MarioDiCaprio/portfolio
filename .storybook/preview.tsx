// noinspection JSUnusedGlobalSymbols

import type { Preview } from "@storybook/react";
import {theme} from "../src/theme";
import {INITIAL_VIEWPORTS, DEFAULT_VIEWPORT} from "@storybook/addon-viewport";
import {CssBaseline, ThemeProvider} from "@mui/material";


const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            default: 'maastrichtBlue',
            values: [
                { name: 'maastrichtBlue', value: theme.palette.background.default }
            ]
        },
        viewport: {
            defaultViewport: DEFAULT_VIEWPORT,
            viewports: {
                ...INITIAL_VIEWPORTS
            }
        }
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Story />
            </ThemeProvider>
        )
    ]
};


export default preview;
