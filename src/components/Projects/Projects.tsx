import React from "react";
import {MotionProps} from "framer-motion";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import {Context, Title} from "./Projects.styles";
import {VibrantCode} from "../../styles/presets.styles";


const fadeOnScrollEffect: MotionProps = {
    initial: {opacity: 0},
    viewport: {once: true, margin: '-100px'},
    whileInView: {opacity: 1, transition: {duration: 0.8}}
}


/**
 * This section highlights the author's projects.
 */
export const Projects: React.FC = () => {
    return (
        <Context id="projects">
            <div>

                <Title {...fadeOnScrollEffect}>
                    <VibrantCode>
                        04.
                    </VibrantCode>
                    Some of my projects
                </Title>

                <FeaturedProject
                    imgSrc="/projects/domcol-js.webp"
                    title="Domcol-JS"
                    links={{
                        official: 'https://domcol-js.vercel.app',
                        github: 'https://github.com/MarioDiCaprioUni/domcol-js'
                    }}
                >
                    A tool for visualizing complex-valued functions using a method called {' '}
                    <i>Domain Coloring</i>. Check it out if you are a math-geek, you can even
                    plot the famous Mandelbrot-Set!
                </FeaturedProject>

                <FeaturedProject
                    imgSrc="/projects/travel2go.webp"
                    title="Travel2Go"
                    links={{
                        official: 'https://travel2go.vercel.app',
                        github: 'https://github.com/MarioDiCaprioUni/travel2go'
                    }}
                >
                    This project is a reference for many interesting travel locations. Useful data,
                    such as prices, distances and catching images are included as well.
                </FeaturedProject>

            </div>
        </Context>
    );
}


export default Projects;
