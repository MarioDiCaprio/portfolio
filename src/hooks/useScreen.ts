import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {theme} from "../theme";


export function useMaxScreen(width: number) {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const isMaxWidth = useMediaQuery({ query: `(max-width: ${width}px)` });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted && isMaxWidth;
}


export function useSmallScreen() {
    return useMaxScreen(theme.breakpoints.sm);
}


export function useMediumScreen() {
    return useMaxScreen(theme.breakpoints.md);
}


export function useLargeScreen() {
    return useMaxScreen(theme.breakpoints.lg);
}
