import React, {ReactNode, useEffect, useRef, useState} from "react";
import {useTransform} from "framer-motion";
import {Child, Context, Scroller} from "./ParallaxText.styles";
import {wrap} from "@motionone/utils";
import {useParallaxScroll} from "../../hooks/useParallaxScroll";


// DISCLAIMER
// idea taken from:
// https://codesandbox.io/s/framer-motion-scroll-velocity-r1dy4u?from-embed=&file=/src/App.tsx:1946-2069


interface ParallaxTextProps {
    /**
     * The base velocity of the text in percent with respect to the children's width.
     * Needs to be adjusted according to the use case.
     */
    baseVelocity: number;
    /**
     * The children. This is what the animation is applied to.
     */
    children?: ReactNode;
}


/**
 * This component animates its children by applying a sliding effect. The slide's velocity is
 * enhanced when the page is scrolled, providing a parallax effect. The slide's direction also
 * changes.
 * This component works by cloning the given children until the component's max-width is reached
 * (all of which is dynamically calculated) and sliding them along the x-axis.
 */
export const ParallaxText: React.FC<ParallaxTextProps> = ({ baseVelocity, children }) => {
    // procedure to dynamically calculate number of children for the text
    // to repeat itself in a minimal manner
    const contextRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLSpanElement>(null);
    const [numberOfChildren, setNumberOfChildren] = useState<number>(0);
    useEffect(() => {
        let contextWidth = contextRef.current?.clientWidth;
        let childWidth = childRef.current?.clientWidth;
        if (contextWidth && childWidth) {
            setNumberOfChildren(Math.ceil(contextWidth / childWidth));
        }
    }, [contextRef, childRef]);

    const baseX = useParallaxScroll(baseVelocity);

    // wraps text between (-100% / n) and 0%, where n is the number of total children. For example,
    // if we have 4 children, then the text is wrapped between -25% and 0%
    const x = useTransform(baseX, v => `${wrap(-50/numberOfChildren, 0, v)}%`);

    return (
        <Context ref={contextRef}>

            {/* This component moves on the x-axis to create the animation */}
            <Scroller style={{ x }}>

                {/* child width is calculated from this component */}
                <Child key={0} ref={childRef}>
                    {children}
                </Child>

                {/* create more children based on calculated number */}
                {
                    (function () {
                        let childList: ReactNode[] = [];
                        for (let i=0; i<numberOfChildren; i++) {
                            childList.push(
                                <Child key={i + 1}>
                                    { children }
                                </Child>
                            );
                        }
                        return childList;
                    }())
                }

            </Scroller>
        </Context>
    );
}

export default ParallaxText;
