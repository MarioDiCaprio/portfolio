import {MotionProps} from "framer-motion";


export const contextMotion: MotionProps = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}

export const logoMotion: MotionProps = {
    animate: {
        opacity: [0, 1, 1, 1],
        translateY: ['0vh', '0vh', '0vh', '100vh']
    },
    transition: {
        delay: 0.5,
        duration: 2.5,
        times: [0, 0.4, 0.6, 1]
    }
}