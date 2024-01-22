import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import {useMediaQuery} from "react-responsive";


const config = resolveConfig(tailwindConfig);

const breakpoints = config.theme.screens;


export function useScreen(breakpoint: keyof typeof breakpoints): boolean {
    const val = breakpoints[breakpoint];
    return useMediaQuery({ query: `(min-width: ${val})` });
}