import React from "react";
import {
    BottomSection,
    Content,
    Context, GitHub, Instagram,
    LinkedIn,
    LinksSection,
    ThanksgivingContent,
    ThanksgivingTitle
} from "./Footer.styles";
import {Container, Grid} from "@mui/material";
import {FaLinkedinIn as LinkedInIcon} from "react-icons/fa";
import {AiFillInstagram as InstagramIcon} from "react-icons/ai";
import {BsGithub as GitHubIcon} from "react-icons/bs";


const Footer: React.FC = () => {
    return (
        <Context>
            <Container maxWidth="lg">

                <Content>
                    <Grid container>

                        <Grid item md={4}>
                            <ThanksgivingTitle>
                                Thanks For Visiting
                            </ThanksgivingTitle>
                            <ThanksgivingContent>
                                I put a lot of effort into this site and the rest of my
                                projects. I am glad you came by to visit!
                            </ThanksgivingContent>
                        </Grid>

                    </Grid>
                </Content>

                <BottomSection>
                    <LinksSection>

                        <LinkedIn target="_blank" href="https://www.linkedin.com/in/mario-di-caprio-a0897b243/">
                            <LinkedInIcon />
                        </LinkedIn>

                        <GitHub target="_blank" href="https://github.com/MarioDiCaprio">
                            <GitHubIcon />
                        </GitHub>

                        <Instagram>
                            <InstagramIcon />
                        </Instagram>

                    </LinksSection>
                </BottomSection>

            </Container>
        </Context>
    );
}


export default Footer;