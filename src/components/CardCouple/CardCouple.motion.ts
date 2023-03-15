import {MotionProps} from "framer-motion";
import {fadeOnScrollEffect} from "../../styles/presets.motion";


export function cardMotion(progress: number, smallScreen: boolean, factor: number): MotionProps {
    return {
        ...fadeOnScrollEffect,
        transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 10
        },
        animate: smallScreen? undefined : { translateX: 100 * progress * factor }
    }
}
