import React, {useState} from 'react';
import {motion, MotionProps, useMotionValueEvent, useScroll} from "framer-motion";
import {useMediumScreen, useSmallScreen} from "../../hooks/useScreen";
import {
    ChessWheelWrapper,
    ContentWrapper,
    Context,
    Interest,
    InterestList,
    ParallaxContent,
    ParallaxWrapper
} from "./Interests.styles";
import {PrimaryHeadline, VibrantCode} from "../../styles/presets.styles";
import {interestListMotion, interestVariants} from "./Interests.motion";
import ParallaxText from "../ParallaxText/ParallaxText";


/**
 * This is a decorative wheel made of chess pieces. It rotates on scroll.
 */
const ChessWheel: React.FC = () => {
    const [rotation, setRotation] = useState<number>(0);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", val => {
        setRotation(val * 0.25);
    });

    return (
        <ChessWheelWrapper>
            <motion.img
                alt=""
                src="/img/chesswheel.png"
                animate={{ rotate: rotation }}
                transition={{ duration: 2, ease: 'easeOut' }}
            />
        </ChessWheelWrapper>
    );
}


/**
 * This is the panel displaying the author's interests. On the left can be
 * found a decorative {@link ChessWheel}, while on the right is a list of
 * interests. This component is responsive: On small screens the wheel
 * is on top and the list is on the bottom.
 */
const Interests: React.FC = () => {
    const isSmallScreen = useSmallScreen();
    const isMediumScreen = useMediumScreen();

    const fadeOnScrollEffect: MotionProps = {
        initial: { opacity: 0 },
        viewport: { once: true, margin: isSmallScreen? '50px' : '-300px' },
        whileInView: { opacity: 1, transition: { duration: 0.8 } }
    }

    const parallaxVelocity = isMediumScreen? 1 : 0.5;

    return (
        <>
            <Context id="interests" {...fadeOnScrollEffect}>

                <ChessWheel />

                <ContentWrapper>

                    <PrimaryHeadline>
                        <VibrantCode>
                            03.
                        </VibrantCode>
                        My Interests
                    </PrimaryHeadline>

                    <InterestList {...interestListMotion}>

                        <Interest variants={interestVariants}>
                            I like developing new skills
                        </Interest>

                        <Interest variants={interestVariants}>
                            I <b>LOVE</b> playing chess
                        </Interest>

                        <Interest variants={interestVariants}>
                            I take an interest in cooking
                        </Interest>

                        <Interest variants={interestVariants}>
                            I enjoy traveling and exploring new cultures
                        </Interest>

                    </InterestList>

                </ContentWrapper>



            </Context>

            <ParallaxWrapper>
                <ParallaxText baseVelocity={parallaxVelocity}>
                    <ParallaxContent>
                        Did you know? My favourite opening is the Sicilian Defense, especially the
                        Sveshnikov variation!
                    </ParallaxContent>
                </ParallaxText>
            </ParallaxWrapper>

            <ParallaxWrapper>
                <ParallaxText baseVelocity={-parallaxVelocity}>
                    <ParallaxContent>
                        Also, my favourite plate of pasta is the very classy Spaghetti Carbonara!
                    </ParallaxContent>
                </ParallaxText>
            </ParallaxWrapper>

            <div style={{ marginBottom: 200 }} />

        </>

    );
}

export default Interests;
