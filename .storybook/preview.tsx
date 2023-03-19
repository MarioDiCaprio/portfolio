// noinspection JSUnusedGlobalSymbols

import type { Preview } from "@storybook/react";
import {theme} from "../src/theme";
import {INITIAL_VIEWPORTS, DEFAULT_VIEWPORT} from "@storybook/addon-viewport";
import {ThemeProvider} from "styled-components";
import {GlobalCSS} from "../src/pages/_app";


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
                { name: 'maastrichtBlue', value: theme.palette.maastrichtBlue }
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
                <GlobalCSS />
                <Story />
            </ThemeProvider>
        )
    ]
};


export default preview;
