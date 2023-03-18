import React from "react";
import {MotionProps, Variants} from "framer-motion";
import {useLargeScreen} from "../../hooks/useScreen";
import {ContentWrapper, Context} from "./About.styles";
import {PrimaryHeadline, SecondaryHeadline, Text, VibrantCode} from "../../styles/presets.styles";


const childVariants: Variants = {
    before: {
        opacity: 0,
        translateY: -20,
    },
    after: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 0.5
        }
    }
}


const About: React.FC = () => {
    const isLargeScreen = useLargeScreen();

    const containerMotion: MotionProps = {
        initial: "before",
        whileInView: "after",
        viewport: {
            once: true,
            margin: isLargeScreen? '-50px' : '-400px'
        },
        transition: {
            staggerChildren: 0.4
        }
    }

    return (
        <Context id="about">
            <ContentWrapper {...containerMotion}>

                <PrimaryHeadline variants={childVariants}>
                    <VibrantCode>01.</VibrantCode>
                    Who is Mario?
                </PrimaryHeadline>

                <SecondaryHeadline variants={childVariants}>
                    I'm an aspiring web developer based in Paderborn, Germany
                </SecondaryHeadline>

                <Text variants={childVariants}>
                    Since I was fourteen years old, I've loved the art of coding and
                    turning complex problems into simple, beautiful solutions. If i am
                    not coding, I am most likely developing my cooking skills, devouring
                    chess books or enjoying a nice evening with friends and family.
                </Text>
                <Text variants={childVariants}>
                    At the moment, I am collecting experience developing software, with a special
                    interest in web development. I also study lots of chess, with the ambition of
                    becoming a respectable player in the future.
                </Text>

            </ContentWrapper>
        </Context>
    );
}


export default About;
