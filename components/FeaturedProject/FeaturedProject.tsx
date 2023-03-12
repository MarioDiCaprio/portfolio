import styles from "./FeaturedProject.module.sass";
import React, {ReactNode} from "react";
import {useMaxScreen} from "../../hooks/useScreen";
import {motion, MotionProps, Variants} from "framer-motion";
import {BsGithub as GithubIcon} from "react-icons/bs";
import {MdOpenInBrowser as OfficialWebsiteIcon} from "react-icons/md";


const infoContainerMotion: MotionProps = {
    initial: "before",
    whileInView: "after",
    viewport: {
        once: true,
        margin: '-150px'
    },
    transition: {
        staggerChildren: 0.4
    }
}

const infoItemVariants: Variants = {
    before: {
        opacity: 0,
        translateX: -20,
    },
    after: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 0.7
        }
    }
}

const thumbnailMotion: MotionProps = {
    initial: {
        opacity: 0,
        translateX: -20
    },
    whileInView: {
        opacity: 1,
        translateX: 0
    },
    viewport: {
        once: true,
        margin: '-150px'
    },
    transition: {
        staggerChildren: 0.4,
        duration: 0.7
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////


interface FeaturedProjectProps {
    title: string;
    imgSrc: string;
    links?: {
        github?: string;
        official?: string;
    };
    children?: ReactNode;
}


const FeaturedProject: React.FC<FeaturedProjectProps> = ({ title, imgSrc, links, children }) => {
    const isSmallScreen = useMaxScreen(1100);


    if (isSmallScreen) {
        return (
            <motion.div className={styles.contextSmall} {...infoContainerMotion}>

                <motion.h1 variants={infoItemVariants}>
                    <span>Featured Project<br/></span>
                    { title }
                </motion.h1>

                <motion.p variants={infoItemVariants}>
                    { children }
                </motion.p>

                <motion.div variants={infoItemVariants}>
                    {
                        links?.github &&
                        <a href={links.github}>
                            <GithubIcon />
                        </a>
                    }
                    {
                        links?.official &&
                        <a href={links.official}>
                            <OfficialWebsiteIcon />
                        </a>
                    }
                </motion.div>

            </motion.div>
        );
    }


    return (
        <div className={styles.context}>

            <motion.div className={styles.thumbnail} {...thumbnailMotion}>
                <img src={imgSrc} alt="" />
                <div />
            </motion.div>

            <motion.div className={styles.content} {...infoContainerMotion}>

                <motion.h1 variants={infoItemVariants}>
                    <span>Featured Project<br/></span>
                    { title }
                </motion.h1>

                <motion.p variants={infoItemVariants}>
                    { children }
                </motion.p>

                <motion.div variants={infoItemVariants}>
                    {
                        links?.github &&
                        <a href={links.github}>
                            <GithubIcon />
                        </a>
                    }
                    {
                        links?.official &&
                        <a href={links.official}>
                            <OfficialWebsiteIcon />
                        </a>
                    }
                </motion.div>

            </motion.div>

        </div>
    );
}

export default FeaturedProject;