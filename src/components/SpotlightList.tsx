"use client"

import React, {ReactNode, useState} from "react";
import { motion } from "motion/react";


interface SpotlightListProps {
    className?: string;
    children: ReactNode[];
}

const SpotlightList: React.FC<SpotlightListProps> = (props) => {
    const [hovered, setHovered] = useState<number>(-1);
    return (
        <ul className={`list-none flex flex-col justify-start items-center gap-12 ${props.className}`}>
            {props.children.map((child, index) => {
                const isDimmed = hovered !== -1 && hovered !== index;
                return (
                    <motion.li
                        key={index}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(-1)}
                        animate={{ opacity: isDimmed ? 0.5 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="
                                rounded-xl bg-transparent hover:bg-woodsmoke-900/70
                                border-t border-transparent hover:border-black-900 duration-300">
                        {child}
                    </motion.li>
                );
            })}
        </ul>
    );
}

export default SpotlightList;
