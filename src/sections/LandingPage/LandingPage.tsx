import React from "react";
import {
    Content,
    Context,
    BannerContainer,
    Title,
    Banner1,
    Banner2,
    Summary,
    GithubButton, PhoneImage
} from "./LandingPage.styles";

const LandingPage: React.FC = () => {
    return (
        <Context>

            <PhoneImage
                src="/landing-page/phone.svg"
                animate={{
                    translateY: [0, -30, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity
                }}
            />

            <Content>

                <BannerContainer>
                    <Banner1>
                        Mario Di Caprio
                    </Banner1>
                    <Banner2 href="https://github.com/MarioDiCaprio" target="_blank">
                        GitHub
                    </Banner2>
                </BannerContainer>

                <Title>
                    Hi, I am <br />
                    Mario Di Caprio
                </Title>

                <Summary>
                    Hi! I am an aspiring software engineer based in Ulm, Germany. Soon, I will
                    be joining Wieland Werke AG to pursue my studies.
                </Summary>

                <GithubButton href="https://github.com/MarioDiCaprio" target="_blank">
                    View My GitHub!
                </GithubButton>

            </Content>
        </Context>
    );
}

export default LandingPage;