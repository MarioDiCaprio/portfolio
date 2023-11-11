import React from "react";
import {
    Content,
    Context,
    BannerContainer,
    Title,
    Banner1,
    Banner2,
    Summary,
    GithubButton, PhoneImage, Phone, SummaryLink
} from "./LandingPage.styles";
import {UnderlinedLink} from "../../styles/presets.styles";

const LandingPage: React.FC = () => {
    return (
        <Context>

            <Phone
                animate={{
                    translateY: [0, -30, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity
                }}
            >
                <PhoneImage id="landing-page-phone" src="/landing-page/iphone.svg"/>
            </Phone>

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
                    Hi! I am an aspiring software engineer based in Ulm, Germany. At the moment, I am
                    studying computer science and working at <SummaryLink href="https://wieland.com" target="_blank">Wieland-Werke AG</SummaryLink>.
                </Summary>

                <GithubButton href="https://github.com/MarioDiCaprio" target="_blank">
                    View My GitHub!
                </GithubButton>

            </Content>
        </Context>
    );
}

export default LandingPage;