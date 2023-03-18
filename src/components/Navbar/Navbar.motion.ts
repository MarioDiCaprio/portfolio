import {MotionProps} from "framer-motion";


export const menuButtonMotion: MotionProps = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { type: 'spring', duration: 0.5 }
}