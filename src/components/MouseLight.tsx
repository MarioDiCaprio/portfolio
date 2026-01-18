"use client"

import { motion } from "motion/react";
import React, {useEffect, useMemo} from "react";


const MouseLight: React.FC = () => {
    const [mouseX, setMouseX] = React.useState<number | null>(null);
    const [mouseY, setMouseY] = React.useState<number | null>(null);

    const isVisible = useMemo(() => {
        return mouseX !== null && mouseY !== null;
    }, [mouseX, mouseY]);

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        }
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    if (!isVisible) return <></>;

    return (
        <motion.div
            animate={{ x: mouseX!, y: mouseY! }}
            transition={{ duration: 0 }}
            className="fixed pointer-events-none rounded-full w-[130px] h-[130px] -translate-1/2 bg-rose/90 blur-[120px]"
        />
    );
}

export default MouseLight;
