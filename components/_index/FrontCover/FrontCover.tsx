import styles from "./FrontCover.module.scss";
import React from "react";
import {motion, MotionProps, Variants} from "framer-motion";


const childVariants: Variants = {
    before: {
        opacity: 0,
        translateY: -20,
    },
    after: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const containerMotion: MotionProps = {
    initial: "before",
    whileInView: "after",
    viewport: {
        once: true,
    },
    transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
    }
}


/**
 * The main display on the home page. This display consists of the author's
 * name in glowing, vibrant colors. Each letter has an intro-animation.
 */
const FrontCover: React.FC = () => {

    return (
        <div id="front-cover" className={styles.context}>
            <motion.div className={styles.contentWrapper} {...containerMotion}>

                <motion.div className={styles.myNameIs} variants={childVariants}>
                    Hi, I am
                </motion.div>

                <motion.div className={styles.name} variants={childVariants}>
                    Mario Di Caprio
                </motion.div>

                <motion.div className={styles.slogan} variants={childVariants}>
                    Your friendly neighbourhood <br/> web-dev.
                </motion.div>

                <motion.div className={styles.summary} variants={childVariants}>
                    I'm an aspiring software developer specializing in web-development.
                </motion.div>

                <motion.a href="https://github.com/MarioDiCaprioUni" className={styles.githubButton} variants={childVariants}>
                    Check out my GitHub!
                </motion.a>

            </motion.div>
        </div>
    );
}


export default FrontCover;
