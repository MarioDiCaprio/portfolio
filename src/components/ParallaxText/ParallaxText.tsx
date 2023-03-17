import React, {ReactNode, useRef} from "react";
import {useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity} from "framer-motion";
import {wrap} from "@motionone/utils";
import {Child, Context, Scroller} from "./ParallaxText.styles";


// DISCLAIMER
// taken from:
// https://codesandbox.io/s/framer-motion-scroll-velocity-r1dy4u?from-embed=&file=/src/App.tsx:1946-2069


interface ParallaxTextProps {
    baseVelocity: number;
    children?: ReactNode;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ baseVelocity, children }) => {
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

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

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
        <Context>
            <Scroller style={{ x }}>
                <Child>{children} </Child>
                <Child>{children} </Child>
                <Child>{children} </Child>
            </Scroller>
        </Context>
    );
}

export default ParallaxText;
