import {Variants} from "framer-motion";


export const defaultLetterVariants: Variants = {
    before: {
        opacity: 0,
        y: -20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    },
    after: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    }
}

export const defaultContainerVariants: Variants = {
    before: { transition: { staggerChildren: 0.015 } },
    after: { transition: { staggerChildren: 0.03 } }
}
