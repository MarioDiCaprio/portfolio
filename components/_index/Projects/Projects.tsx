import styles from "./Projects.module.sass";
import React from "react";
import {motion, MotionProps} from "framer-motion";
import FeaturedProject from "../../FeaturedProject/FeaturedProject";


/**
 * Framer-Motion effect that fades-in when a component is scrolled
 * into view.
 */
const fadeOnScrollEffect: MotionProps = {
    initial: {opacity: 0},
    viewport: {once: true, margin: '-100px'},
    whileInView: {opacity: 1, transition: {duration: 0.8}}
}


const Projects: React.FC = () => {
    return (
        <div id="projects" className={styles.context}>
            <div>

                <motion.h1 className={styles.title} {...fadeOnScrollEffect}>
                    <span>04.</span>
                    Some of my projects
                </motion.h1>

                <FeaturedProject
                    imgSrc="/thumbnails/domcol_js.png"
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
                    imgSrc="/thumbnails/travel2go.png"
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
        </div>
    );
}


export default Projects;
