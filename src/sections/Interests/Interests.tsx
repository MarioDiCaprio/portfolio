import React, {useState} from "react";
import {Container, IconButton, useMediaQuery} from "@mui/material";
import {FaArrowLeft as LeftArrowIcon, FaArrowRight as RightArrowIcon} from "react-icons/fa";
import {
    ButtonContainer,
    CircleContainer,
    Content,
    InterestContainer,
    InterestDescription,
    InterestElement, InterestTitle,
    MainContainer
} from "./Interests.styles";
import {Title, Subtitle} from "../../styles/presets.motion";
import {
    LayoutGroup,
    motion, MotionProps,
    useAnimationFrame,
    useMotionValue,
    useMotionValueEvent,
} from "framer-motion";
import {interestContainerMotion} from "./Interests.motion";


const Interests: React.FC = () => {
    const isMediumScreen = useMediaQuery('(max-width: 1245px)');
    const isSmallScreen = useMediaQuery('(max-width: 485px)');

    const [active, setActive] = useState<number>(0);

    const theta = useMotionValue<number>(0);
    useAnimationFrame((timestamp, _delta) => {
        theta.set(timestamp * 0.02);
    });

    const circleRotation = useMotionValue<number>(0);
    useMotionValueEvent(theta, 'change', value => {
        let tmp = Math.sin(value * (Math.PI / 180)) * 10;
        circleRotation.set(tmp);
    });

    const transition: MotionProps['transition'] = {
        duration: 0.8,
        ease: "easeOut"
    }

    function previousIndex() {
        if (active === 0)
            setActive(5);
        else
            setActive(active - 1);
    }

    function nextIndex() {
        if (active === 5)
            setActive(0);
        else
            setActive(active + 1);
    }

    function elementAnimation(index: number, active: boolean): MotionProps['animate'] {
        let divisions = 6;
        let width = isSmallScreen? 50 : 75;
        let height = isSmallScreen? 50 : 75;
        let containerWidth = isSmallScreen? 300 : isMediumScreen? 350 : 475;
        let containerHeight = isSmallScreen? 300 : isMediumScreen? 350 : 475;
        let activeWidth = isSmallScreen? 100 : 160;
        let activeHeight = isSmallScreen? 100 : 160;

        if (active) {
            return {
                x: (-activeWidth - containerWidth) / 2,
                y: (containerHeight - activeHeight) / 2,
                width: activeWidth,
                height: activeHeight
            }
        }

        let fac = 2 * Math.PI / divisions * index;
        let x = (Math.cos(fac) * containerWidth - containerWidth - width) / 2 + 'px';
        let y = (Math.sin(fac) * containerHeight + containerHeight - height) / 2 + 'px';

        return { x, y, width, height };
    }

    return (
        <Container maxWidth="lg">
            <Content>

                <CircleContainer id="interests-circle-container" style={{ rotate: circleRotation }}>
                    <motion.img alt="" src="/interests/circle.svg" width="100%" />
                    <LayoutGroup>
                        <InterestElement
                            layout
                            animate={elementAnimation(0, active === 0)}
                            transition={transition}
                            src="/interests/chess.webp"
                            alt="chess"
                            onClick={() => setActive(0)}
                        />
                        <InterestElement
                            layout
                            animate={elementAnimation(1, active === 1)}
                            transition={transition}
                            src="/interests/coding.webp"
                            alt="coding"
                            onClick={() => setActive(1)}
                        />
                        <InterestElement
                            layout
                            animate={elementAnimation(2, active === 2)}
                            transition={transition}
                            src="/interests/gym.webp"
                            alt="gym"
                            onClick={() => setActive(2)}
                        />
                        <InterestElement
                            layout
                            animate={elementAnimation(3, active === 3)}
                            transition={transition}
                            src="/interests/pasta.webp"
                            alt="pasta"
                            onClick={() => setActive(3)}
                        />
                        <InterestElement
                            layout
                            animate={elementAnimation(4, active === 4)}
                            transition={transition}
                            src="/interests/modelling.webp"
                            alt="modelling"
                            onClick={() => setActive(4)}
                        />
                        <InterestElement
                            layout
                            animate={elementAnimation(5, active === 5)}
                            transition={transition}
                            src="/interests/hiking.webp"
                            alt="hiking"
                            onClick={() => setActive(5)}
                        />
                    </LayoutGroup>
                </CircleContainer>

                <MainContainer>

                    <Subtitle>
                        A Bit More About Myself
                    </Subtitle>
                    <Title>
                        Some Of My Interests
                    </Title>

                    <ButtonContainer>
                        <IconButton color="primary" onClick={previousIndex}>
                            <LeftArrowIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={nextIndex}>
                            <RightArrowIcon />
                        </IconButton>
                    </ButtonContainer>

                    <div style={{ position: 'relative' }}>
                        <InterestContainer {...interestContainerMotion(active === 0)}>
                            <InterestTitle>
                                Chess
                            </InterestTitle>
                            <InterestDescription>
                                Some years ago, I started cultivating an interest in chess. I love
                                learning new openings, improving my middle- and endgame and putting
                                my skills to the test on official tournaments!
                            </InterestDescription>
                        </InterestContainer>

                        <InterestContainer {...interestContainerMotion(active === 1)}>
                            <InterestTitle>
                                Software Development
                            </InterestTitle>
                            <InterestDescription>
                                Obviously, this one had to be on the list, being the foundation
                                of my career as a software developer. Learning new tools and staying
                                up-to-date is also part of the job!
                            </InterestDescription>
                        </InterestContainer>

                        <InterestContainer {...interestContainerMotion(active === 2)}>
                            <InterestTitle>
                                Weightlifting
                            </InterestTitle>
                            <InterestDescription>
                                I am a firm believer that staying in tip-top shape and regularly
                                working your muscles raises your confidence like few other things
                                do. Plus, its super fun!
                            </InterestDescription>
                        </InterestContainer>

                        <InterestContainer {...interestContainerMotion(active === 3)}>
                            <InterestTitle>
                                Cooking
                            </InterestTitle>
                            <InterestDescription>
                                Before moving out for the first time, I have started to appreciate
                                the various comfort-foods that different cultures can bring. It is
                                always good to have a dish or two up your sleeves to impress friends
                                and family!
                            </InterestDescription>
                        </InterestContainer>

                        <InterestContainer {...interestContainerMotion(active === 4)}>
                            <InterestTitle>
                                3D Modelling
                            </InterestTitle>
                            <InterestDescription>
                                While I would never consider myself an expert, 3D modelling is
                                definitely an interesting pastime.
                            </InterestDescription>
                        </InterestContainer>

                        <InterestContainer {...interestContainerMotion(active === 5)}>
                            <InterestTitle>
                                Hiking
                            </InterestTitle>
                            <InterestDescription>
                                One of my favourite things to do is going on long hikes
                                and being out in the open, exploring the beauties mother
                                nature has to offer!
                            </InterestDescription>
                        </InterestContainer>
                    </div>

                </MainContainer>

            </Content>
        </Container>
    );
}

export default Interests;