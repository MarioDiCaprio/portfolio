import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";


const palette = {
    'rose': {
        '50': '#fff0f8',
        '100': '#ffe3f4',
        '200': '#ffc6e9',
        '300': '#ff98d6',
        '400': '#ff58b8',
        '500': '#ff279a',
        '600': '#ff0f7b',
        '700': '#df0058',
        '800': '#b80049',
        '900': '#980340',
        '950': '#5f0022',
        DEFAULT: '#ff0f7b' // = 600
    },
    'portica': {
        '50': '#fefde8',
        '100': '#fffcc2',
        '200': '#fff489',
        '300': '#ffea61',
        '400': '#fdd412',
        '500': '#ecba06',
        '600': '#cc9002',
        '700': '#a36605',
        '800': '#86500d',
        '900': '#724211',
        '950': '#432205',
        DEFAULT: '#ffea61' // = 300
    },
    'torch-red': {
        '50': '#fff1f2',
        '100': '#ffdfe2',
        '200': '#ffc5ca',
        '300': '#ff9da5',
        '400': '#ff6471',
        '500': '#ff2c3e',
        '600': '#ed1527',
        '700': '#c80d1d',
        '800': '#a50f1c',
        '900': '#88141e',
        '950': '#4b040a',
        DEFAULT: '#ff2c3e' // = 500
    },
    'violet-eggplant': {
        '50': '#fdf5fe',
        '100': '#fbeafd',
        '200': '#f6d5f9',
        '300': '#f2b3f4',
        '400': '#eb86ec',
        '500': '#dd57de',
        '600': '#c237c0',
        '700': '#a92da5',
        '800': '#83257f',
        '900': '#6c2367',
        '950': '#470b44',
        DEFAULT: '#a92da5' // = 700
    },
    'curious-blue': {
        '50': '#f0f9ff',
        '100': '#e1f2fd',
        '200': '#bce4fb',
        '300': '#81d1f8',
        '400': '#3eb9f2',
        '500': '#1393cf',
        '600': '#0880c1',
        '700': '#08679c',
        '800': '#0b5781',
        '900': '#0f486b',
        '950': '#0a2e47',
        DEFAULT: '#1393cf' // = 500
    },
    'ebony-clay': {
        '50': '#f4f6fa',
        '100': '#e7eaf2',
        '200': '#d4d9e9',
        '300': '#b7c1d9',
        '400': '#94a1c6',
        '500': '#7a86b7',
        '600': '#6771a9',
        '700': '#5c6199',
        '800': '#4f527e',
        '900': '#424566',
        '950': '#272839',
        DEFAULT: '#272839' // = 950
    },
    'jumbo': {
        '50': '#f6f6f7',
        '100': '#eeeff1',
        '200': '#e0e2e5',
        '300': '#cccfd5',
        '400': '#b7bac2',
        '500': '#a3a5b1',
        '600': '#8e8f9d',
        '700': '#7c7d8a',
        '800': '#64656f',
        '900': '#53535c',
        '950': '#313235',
        DEFAULT: '#7c7d8a' // = 700
    },
    'white': {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
        DEFAULT: '#ffffff' // = 50
    },
}


const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'barlow': ['Barlow', 'sans-serif'],
            'monospace': ['monospace']
        },
        colors: palette
    },
    darkMode: "class",
    plugins: [nextui({
        defaultTheme: 'light',
        defaultExtendTheme: 'light',
        themes: {
            'light': {
                colors: {
                    background: palette['white'],
                    foreground: palette['ebony-clay'],
                    primary: palette['rose'],
                    secondary: palette['portica']
                }
            }
        }
    })],
}

export default config
