import React from "react";
import {ContentWrapper, Context, GithubButton, Greeting, Name, Slogan, Summary} from "./LandingPage.styles";
import {childVariants, containerMotion} from "./LandingPage.motion";
import {UnderlinedLink} from "../../styles/presets.styles";
import LandingPageBackground from "../LandingPageBackground/LandingPageBackground";


/**
 * The main display on the home page. This display consists of the author's
 * name in glowing, vibrant colors. Each letter has an intro-animation.
 */
export const LandingPage: React.FC = () => {

    return (
        <Context id="front-cover">
            <ContentWrapper {...containerMotion}>

                <Greeting variants={childVariants}>
                    Hi, I am
                </Greeting>

                <Name variants={childVariants}>
                    Mario Di Caprio
                </Name>

                <Slogan variants={childVariants}>
                    Your friendly neighbourhood <br/> web-dev.
                </Slogan>

                <Summary variants={childVariants}>
                    I'm an aspiring software developer specializing in web-development. Soon,
                    I will be joining <UnderlinedLink href="https://www.wieland.com" target="_blank" rel="noreferrer">Wieland-Werke</UnderlinedLink> to
                    work on my CS-degree and work with a large-scale company.
                </Summary>

                <GithubButton
                    href="https://github.com/MarioDiCaprio"
                    target="_blank"
                    rel="noreferrer"
                    variants={childVariants}
                >
                    Check out my GitHub!
                </GithubButton>

            </ContentWrapper>

            <LandingPageBackground />
        </Context>
    );
}


export default LandingPage;
