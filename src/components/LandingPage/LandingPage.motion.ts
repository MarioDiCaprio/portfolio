import {MotionProps, Variants} from "framer-motion";


export const childVariants: Variants = {
    before: {
        opacity: 0,
        translateY: -20,
    },
    after: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export const containerMotion: MotionProps = {
    initial: "before",
    whileInView: "after",
    viewport: {
        once: true,
    },
    transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
    }
}