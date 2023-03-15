import React, {useState, useEffect} from 'react';
import {motion, MotionProps, useScroll} from "framer-motion";
import {useSmallScreen} from "../../hooks/useScreen";
import {ChessWheelWrapper, ContentWrapper, Context, Interest, InterestList} from "./Interests.styles";
import {PrimaryHeadline, VibrantCode} from "../../styles/presets.styles";
import {interestListMotion, interestVariants} from "./Interests.motion";


/**
 * This is a decorative wheel made of chess pieces. It rotates on scroll.
 */
const ChessWheel: React.FC = () => {
    /** The wheel's current rotation */
    const [rotation, setRotation] = useState<number>(0);
    /** The global scroll value. Used to update rotation. */
    const { scrollY } = useScroll();

    /* Updates the wheel's rotation on scroll */
    useEffect(() => {
        scrollY.onChange(x => {
            setRotation(x * 0.25);
        });
    }, [scrollY])

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

    const fadeOnScrollEffect: MotionProps = {
        initial: { opacity: 0 },
        viewport: { once: true, margin: isSmallScreen? '50px' : '-300px' },
        whileInView: { opacity: 1, transition: { duration: 0.8 } }
    }

    return (
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
    );
}

export default Interests;
