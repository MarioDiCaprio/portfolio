import {MotionProps, Variants} from "framer-motion";


export const infoContainerMotion: MotionProps = {
    initial: "before",
    whileInView: "after",
    viewport: {
        once: true,
        margin: '-150px'
    },
    transition: {
        staggerChildren: 0.4
    }
}

export const infoItemVariants: Variants = {
    before: {
        opacity: 0,
        translateX: -20,
    },
    after: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 0.7
        }
    }
}

export const thumbnailMotion: MotionProps = {
    initial: {
        opacity: 0,
        translateX: -20
    },
    whileInView: {
        opacity: 1,
        translateX: 0
    },
    viewport: {
        once: true,
        margin: '-150px'
    },
    transition: {
        staggerChildren: 0.4,
        duration: 0.7
    }
}