import {MotionProps, Variants} from "framer-motion";


export const interestVariants: Variants = {
    before: {
        opacity: 0,
        translateX: -20,
    },
    after: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 0.5
        }
    }
}

export const interestListMotion: MotionProps = {
    initial: "before",
    whileInView: "after",
    viewport: {
        once: true
    },
    transition: {
        staggerChildren: 0.4
    }
}