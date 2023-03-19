import React, {ReactNode} from "react";
import {Variant} from "framer-motion";
import {Letter, Word, Words} from "./AnimateLetters.styles";
import {defaultContainerVariants, defaultLetterVariants} from "./AnimateLetters.motion";


interface AnimateLettersProps {
    /**
     * Framer-Motion variants for the container component.
     * By default, staggers children (letters) for a short time.
     */
    containerVariants?: {
        before: Variant;
        after: Variant;
    };
    /**
     * Framer-Motion variants applied to each letter.
     * By default, performs a "swing" animation on each letter.
     */
    letterVariants?: {
        before: Variant;
        after: Variant;
    };
    /**
     * The component's children. Note that only textual data is supported.
     */
    children?: ReactNode;
}


/**
 * This component animates each letter that is passed as a child. Note that children should be composed of
 * textual data only!
 */
export const AnimateLetters: React.FC<AnimateLettersProps> = ({ containerVariants = defaultContainerVariants, letterVariants = defaultLetterVariants, children }) => {
    if (typeof children !== 'string') {
        return <></>;
    }

    const words = children.split(' ').map((word, wordIndex) => {
        let letters = Array.from(word).map((letter, letterIndex) => (
            <Letter
                key={`word-${wordIndex}-letter-${letterIndex}`}
                variants={letterVariants}
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
            variants={containerVariants}
        >
            { words }
        </Words>
    );
}

export default AnimateLetters;
