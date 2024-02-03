"use client"

import React, {ReactNode} from "react";
import {AnimatePresence, motion, MotionProps} from "framer-motion";


const containerMotion: MotionProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 }
}


const PageTransition: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div {...containerMotion}>
                { children }
            </motion.div>
        </AnimatePresence>
    )
}
    

export default PageTransition