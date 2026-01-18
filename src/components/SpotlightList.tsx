"use client"

import React, {ReactNode, useState} from "react";


interface SpotlightListProps {
    className?: string;
    children: ReactNode[];
}

const SpotlightList: React.FC<SpotlightListProps> = (props) => {
    const [hovered, setHovered] = useState<number>(-1);
    return (
        <ul className={`list-none flex flex-col justify-start items-center ${props.className}`}>
            {props.children.map((child, index) => {
                const isDimmed = hovered !== -1 && hovered !== index;
                return (
                    <li
                        key={index}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(-1)}
                        className={`
                            rounded-xl bg-transparent hover:bg-woodsmoke-900/70
                            border-t border-transparent hover:border-black-900 duration-300
                            ${isDimmed ? 'opacity-50' : 'opacity-100'}`}>
                        {child}
                    </li>
                );
            })}
        </ul>
    );
}

export default SpotlightList;
