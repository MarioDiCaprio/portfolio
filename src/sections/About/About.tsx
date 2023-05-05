import React from "react";
import Languages from "../../components/Languages/Languages";
import {Container} from "@mui/material";
import {Box1, Box2, Content, ParagraphContainer, ParagraphContent, ParagraphIcon, Title} from "./About.styles";
import {GiTechnoHeart as HeartIcon} from "react-icons/gi";
import {FaGlobeAmericas as GlobeIcon} from "react-icons/fa";


const About: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Languages />
            <Content>
                <Box1>

                </Box1>
                <Box2>

                    <Title>
                        Who is Mario?
                    </Title>

                    <ParagraphContainer>
                        <ParagraphIcon>
                            <HeartIcon />
                        </ParagraphIcon>
                        <ParagraphContent>
                            <h4>
                                I'm a sucker for technology
                            </h4>
                            <p>
                                Since I was 14 years old, I loved the art of of software development and turning complex
                                problems into simple, beautiful solutions.
                            </p>
                        </ParagraphContent>
                    </ParagraphContainer>

                    <ParagraphContainer>
                        <ParagraphIcon>
                            <GlobeIcon />
                        </ParagraphIcon>
                        <ParagraphContent>
                            <h4>
                                I'm always eager to learn
                            </h4>
                            <p>
                                Learning new skills, getting to know new cultures and broadening the spectrum of your
                                understanding is one way to live a fulfilling life.
                            </p>
                        </ParagraphContent>
                    </ParagraphContainer>

                </Box2>
            </Content>
        </Container>
    );
}

export default About;