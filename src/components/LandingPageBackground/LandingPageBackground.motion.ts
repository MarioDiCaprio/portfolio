import {MotionProps} from "framer-motion";


export const contextMotion: MotionProps = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition: {
        duration: 1,
        delay: 2
    }
}