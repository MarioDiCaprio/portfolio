import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {useTheme} from "@mui/material";


export function useMaxScreen(width: number) {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const isMaxWidth = useMediaQuery({ query: `(max-width: ${width}px)` });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted && isMaxWidth;
}


export function useSmallScreen() {
    const theme = useTheme();
    return useMaxScreen(theme.breakpoints.values.sm);
}


export function useMediumScreen() {
    const theme = useTheme();
    return useMaxScreen(theme.breakpoints.values.md);
}


export function useLargeScreen() {
    const theme = useTheme();
    return useMaxScreen(theme.breakpoints.values.lg);
}
