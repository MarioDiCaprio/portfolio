import React, {ReactNode, useEffect, useRef, useState} from "react";
import {useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity} from "framer-motion";
import {Child, Context, Scroller} from "./ParallaxText.styles";
import {wrap} from "@motionone/utils";


// DISCLAIMER
// idea taken from:
// https://codesandbox.io/s/framer-motion-scroll-velocity-r1dy4u?from-embed=&file=/src/App.tsx:1946-2069


interface ParallaxTextProps {
    baseVelocity: number;
    children?: ReactNode;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ baseVelocity, children }) => {
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

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    // wraps text between (-100% / n) and 0%, where n is the number of total children. For example,
    // if we have 4 children, then the text is wrapped between -25% and 0%
    const x = useTransform(baseX, (v) => `${wrap(-50/numberOfChildren, 0, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((_t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // change direction on scroll
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

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
