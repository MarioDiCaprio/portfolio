import styles from "./ProjectPreview.module.scss";
import React, {useState} from "react";
import {AnimatePresence, motion, MotionProps, Variants} from "framer-motion";
import {BsGithub as GitHubIcon} from "react-icons/bs";


const contextVariants: Variants = {
    'closed': i => ({
        width: 330,
        maxWidth: '95vw',
        height: 250,
        position: 'absolute',
        left: i * 350,
        borderRadius: 15,
        zIndex: 0,
        cursor: 'pointer',
        overflowY: 'hidden'
    }),
    'open': {
        width: 600,
        maxWidth: '95vw',
        height: '90vh',
        top: '5vh',
        position: 'fixed',
        borderRadius: 5,
        zIndex: 500,
        cursor: 'unset',
        overflowY: 'auto'
    }
}

const showComponentWhenOpen: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}


interface ProjectProps {
    id: string;
    title: string;
    thumbnailSrc: string;
    summary: string;
    description: string;
    links?: {
        official?: string,
        github?: string,
    }
}


const ProjectPreview: React.FC<ProjectProps> = ({ title, thumbnailSrc, summary, description, links }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleContextClicked() {
        if (!isOpen) {
            setIsOpen(true);
        }
    }

    function close() {
        setIsOpen(false);
    }

    return (
        <>
            <motion.div
                layoutId="ProjectPreview"
                className={styles.context}
                onClick={handleContextClicked}
                initial={"closed"}
                animate={isOpen? "open" : "closed"}
                variants={contextVariants}
                whileTap={!isOpen? { scale: 0.9 } : undefined}
                transition={{ type: 'spring', duration: 0.7 }}
            >

                {/* Thumbnail */}
                <img className={styles.thumbnail} src={thumbnailSrc} alt="" />

                {/* Title when open */}
                {
                    isOpen &&
                    <AnimatePresence>
                        <motion.h1
                            className={styles.title}
                            initial={{
                                opacity: 0,
                                translateY: -100
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0
                            }}
                            exit={{
                                opacity: 0,
                                translateY: -100
                            }}
                        >
                            { title }
                        </motion.h1>
                    </AnimatePresence>

                }

                {/* Project summary */}
                <p className={styles.summary}>
                    { summary }
                </p>

                {/* Additional content when open */}
                {
                    isOpen &&
                    <>
                        {/* Description */}
                        <AnimatePresence>
                            <motion.p className={styles.description} {...showComponentWhenOpen}>
                                { description }
                            </motion.p>
                        </AnimatePresence>

                        {/* Wrapper on the bottom of the pop-up */}
                        <div className={styles.bottomWrapper}>

                            {/* View Project links */}
                            <div className={styles.links}>
                                <span>View This Project:</span>
                                {
                                    links?.github &&
                                    <p>
                                        <GitHubIcon />
                                        <a href={links.github}>GitHub</a>
                                    </p>
                                }
                            </div>

                            {/* Close button */}
                            <AnimatePresence>
                                <motion.button
                                    className={styles.closeButton}
                                    onClick={close}
                                    {...showComponentWhenOpen}
                                    whileTap={{
                                        scale: 0.7,
                                        transition: {
                                            type: 'spring'
                                        }
                                    }}
                                >
                                    Close
                                </motion.button>
                            </AnimatePresence>

                        </div>
                    </>
                }

            </motion.div>

            {/* black masking for when the component is open */}
            {
                isOpen &&
                <AnimatePresence>
                    <motion.div className={styles.mask} {...showComponentWhenOpen}/>
                </AnimatePresence>
            }
        </>
    );
}


export default ProjectPreview;

/////////////////////////////////////////////////////////////////

export const DomcolJS: React.FC = () => (
    <ProjectPreview
        id="domcol-js"
        title="Domcol JS"
        thumbnailSrc="/thumbnails/domcol_js.png"
        summary="Plot complex-valued functions"
        description={`
            This web application can plot mathematical functions that
            have a complex domain and codomain using a method known as
            "Domain Coloring". It utilizes a parser that compiles mathematical
            code into OpenGL shaders, which is the technology of choice for such
            a task. You can also plot the famous mandelbrot set!
        `}
        links={{
            github: 'https://github.com/MarioDiCaprioUni/domcol-js'
        }}
    />
);
