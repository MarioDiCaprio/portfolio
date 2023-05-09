import React from "react";
import {
    Context,
    ProjectContainer,
    ProjectContent,
    ProjectDescription,
    ProjectImage, ProjectLinks,
    ProjectTitle,
    Title
} from "./Projects.styles";
import {Container, IconButton} from "@mui/material";
import {FaFirefox as BrowserIcon} from "react-icons/fa";
import {BsGithub as GithubIcon} from "react-icons/bs";


const Projects: React.FC = () => {
    return (
        <Context>
            <Container maxWidth="lg">

                <Title>
                    Some Of My Projects
                </Title>

                <ProjectContainer>
                    <ProjectImage alt="" src="/projects/complexify.webp" />
                    <ProjectContent>
                        <ProjectTitle>
                            Complexify
                        </ProjectTitle>
                        <ProjectDescription>
                            A tool for visualizing complex-valued functions using standard techniques such
                            as <i>Domain Coloring</i> or the stereographic projection of the <i>Riemann Sphere</i>.
                            Check it out if you are a math geek!
                        </ProjectDescription>
                        <ProjectLinks>
                            <a href="https://complexify.vercel.app" target="_blank">
                                <IconButton color="primary">
                                    <BrowserIcon />
                                </IconButton>
                            </a>
                            <a href="https://github.com/MarioDiCaprio/complexify" target="_blank">
                                <IconButton color="primary">
                                    <GithubIcon />
                                </IconButton>
                            </a>
                        </ProjectLinks>
                    </ProjectContent>
                </ProjectContainer>

            </Container>
        </Context>
    );
}

export default Projects;