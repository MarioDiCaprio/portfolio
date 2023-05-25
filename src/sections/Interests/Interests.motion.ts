import {MotionProps} from "framer-motion";


export function interestContainerMotion(active: boolean): MotionProps {
    if (active) {
        return {
            animate: { opacity: 1 },
            transition: { duration: 0.4, delay: 0.4 }
        };
    }

    return {
        animate: { opacity: 0 },
        transition: { duration: 0.4 }
    };
}