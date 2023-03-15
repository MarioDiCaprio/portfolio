import {MotionProps} from "framer-motion";


export const maskMotion: MotionProps = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

export const rootMotion: MotionProps = {
    initial: {
        translateX: '100vw'
    },
    animate: {
        translateX: 0
    },
    exit: {
        translateX: '100vw'
    }
}