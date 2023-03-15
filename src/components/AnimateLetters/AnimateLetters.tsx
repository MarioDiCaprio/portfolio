import React, {ReactNode} from "react";
import {Variant} from "framer-motion";
import {Letter, Word, Words} from "./AnimateLetters.styles";
import {defaultContainerVariants, defaultLetterVariants} from "./AnimateLetters.motion";


interface AnimateLettersProps {
    containerVariants?: {
        before: Variant;
        after: Variant;
    };
    letterVariants?: {
        before: Variant;
        after: Variant;
    };
    children?: ReactNode;
}


const AnimateLetters: React.FC<AnimateLettersProps> = ({ containerVariants, letterVariants, children }) => {
    if (typeof children !== 'string') {
        return <></>;
    }

    const words = children.split(' ').map((word, wordIndex) => {
        let letters = Array.from(word).map((letter, letterIndex) => (
            <Letter
                key={`word-${wordIndex}-letter-${letterIndex}`}
                variants={letterVariants ?? defaultLetterVariants}
            >
                {letter === " " ? "\u00A0" : letter}
            </Letter>
        ));

        return (
            <Word key={`word-${wordIndex}`}>
                { letters }
            </Word>
        );
    });

    return (
        <Words
            initial="before"
            animate="after"
            variants={containerVariants ?? defaultContainerVariants}
        >
            { words }
        </Words>
    );
}

export default AnimateLetters;
