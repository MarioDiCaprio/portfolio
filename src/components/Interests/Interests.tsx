import React from 'react';
import {motion, MotionProps, useTransform} from "framer-motion";
import {useSmallScreen} from "../../hooks/useScreen";
import {
    BulletPoint,
    ChessWheelWrapper,
    ContentWrapper,
    Context,
    Interest,
    InterestList
} from "./Interests.styles";
import {PrimaryHeadline, VibrantCode} from "../../styles/presets.styles";
import {interestListMotion, interestVariants} from "./Interests.motion";
import {useParallaxScroll} from "../../hooks/useParallaxScroll";
import {
    FaChessKnight as KnightIcon,
    FaChessRook as RookIcon,
    FaChessKing as KingIcon,
    FaChessBishop as BishopIcon,
    FaChessQueen as QueenIcon
} from "react-icons/fa";


/**
 * This is a decorative wheel made of chess pieces. It rotates on scroll.
 */
const ChessWheel: React.FC = () => {
    const baseRotation = useParallaxScroll(50);
    const rotate = useTransform(baseRotation, r => `${r}deg`);

    return (
        <ChessWheelWrapper>
            <motion.img
                alt=""
                src="/img/chesswheel.png"
                style={{ rotate }}
            />
        </ChessWheelWrapper>
    );
}


/**
 * This is the panel displaying the author's interests. On the left can be
 * found a decorative `ChessWheel`, while on the right is a list of
 * interests. This component is responsive: On small screens the wheel
 * is on the bottom of the component.
 */
export const Interests: React.FC = () => {
    const isSmallScreen = useSmallScreen();

    const fadeOnScrollEffect: MotionProps = {
        initial: { opacity: 0 },
        viewport: { once: true, margin: isSmallScreen? '50px' : '-300px' },
        whileInView: { opacity: 1, transition: { duration: 0.8 } }
    }

    return (
        <Context secondary id="interests" {...fadeOnScrollEffect}>

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
                        <BulletPoint>
                            <KnightIcon />
                        </BulletPoint>
                        I like developing new skills
                    </Interest>

                    <Interest variants={interestVariants}>
                        <BulletPoint>
                            <KingIcon />
                        </BulletPoint>
                        I <b>LOVE</b> playing chess
                    </Interest>

                    <Interest variants={interestVariants}>
                        <BulletPoint>
                            <RookIcon />
                        </BulletPoint>
                        I take an interest in cooking
                    </Interest>

                    <Interest variants={interestVariants}>
                        <BulletPoint>
                            <BishopIcon />
                        </BulletPoint>
                        I enjoy traveling and exploring new cultures
                    </Interest>

                    <Interest variants={interestVariants}>
                        <BulletPoint>
                            <QueenIcon />
                        </BulletPoint>
                        I go to the gym
                        <img alt="" src="/gif/flexedBiceps.gif" style={{ height: '1.5rem', marginLeft: 5 }} />
                    </Interest>

                </InterestList>

            </ContentWrapper>

        </Context>

    );
}

export default Interests;
