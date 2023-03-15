import {MotionProps} from "framer-motion";


export const fadeOnScrollEffect: MotionProps = {
    initial: { opacity: 0 },
    viewport: { once: true, margin: '-100px' },
    whileInView: { opacity: 1, transition: { duration: 0.8 } }
}
