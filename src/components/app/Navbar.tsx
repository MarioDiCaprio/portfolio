"use client"

import React, {useState} from "react";
import Link from "next/link";
import {
    motion, useMotionValueEvent,
    useScroll, useVelocity,
} from "framer-motion";


const Navbar: React.FC = () => {
    const { scrollY } = useScroll();
    
    const velocity = useVelocity(scrollY);
    const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
    useMotionValueEvent(velocity, 'change', v => {
        if (v > 0)
            setIsScrollingDown(true)
        else if (v < 0)
            setIsScrollingDown(false)
    })
    
    const [isOnTop, setIsOnTop] = useState<boolean>(true);
    useMotionValueEvent(scrollY, 'change', y => {
        setIsOnTop(y <= 110);
    })
    
    return (
        <motion.div
            className="z-[100] fixed w-full flex justify-around items-center text-white"
            animate={{ height: isOnTop? 110 : 75, background: isOnTop? "#00000000" : "#272839", translateY: (isScrollingDown && !isOnTop)? -110 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            
            <div>
                <img src="/logo/logo.png" alt="Mario Di Caprio" className="w-[70px] h-[70px]"/>
            </div>
            
            <div className="flex font-bold">
                <Link href="/" className="underlined-link">
                    Home
                </Link>
            </div>
            
        </motion.div>
    )
}

export default Navbar