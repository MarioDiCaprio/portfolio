import {MotionProps} from "framer-motion";


export const logoMotion: MotionProps = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    whileTap: { scale: 0.6 },
    transition: { type: 'spring', duration: 0.4 }
};

export const menuButtonMotion: MotionProps = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { type: 'spring', duration: 0.5 }
}