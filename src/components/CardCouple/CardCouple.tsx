import React, {useEffect, useRef, useState} from "react";
import {useMaxScreen, useMediumScreen} from "../../hooks/useScreen";
import {useScroll} from "framer-motion";
import {CardContext, Context} from "./CardCouple.styles";
import {cardMotion} from "./CardCouple.motion";


/**
 * This interface represents a card that describes a skill.
 * Note that this interface is solely used for its corresponding
 * component.
 * @see CardCoupleProps
 * @see CardCouple
 */
interface Card {
    /** The skill's title */
    title: string;
    /** The source of an image of this skill */
    imageSrc: string;
    /** A description for this skill */
    text: string;
}

/**
 * This interface represents a couple of cards. That is, in a table
 * of cards this interface holds two cards in the same row.
 * Note that this interface is solely used for its corresponding
 * component.
 * @see Card
 * @see CardCouple
 */
interface CardCoupleProps {
    /** The card on the left */
    left: Card;
    /** The card on the right */
    right: Card;
}

/**
 * This component places two {@link Card}s in one row. These cards have an
 * animation: The distance to each other increases as the page is scrolled.
 * This component is responsive: On small screens the cards aren't placed
 * besides each other, but on top of each other. Therefore, the animation
 * is removed in that case.
 * @param props The props for this component
 * @see Card
 * @see CardCoupleProps
 */
const CardCouple: React.FC<CardCoupleProps> = ({ left, right }) => {
    /** A reference to a wrapper for the cards. Used to identify scrolling events. */
    const ref = useRef(null);
    /** The progress of the animation. Between 0 and 1. */
    const [progress, setProgress] = useState<number>(0);
    /** Whether the screen is small, so to stack the cards instead of inlining them. */
    const isSmallScreen = useMediumScreen();
    /** Whether a skill's icon should be inlined with its description. Depends on screen width. */
    const shouldNotInlineIcon = useMaxScreen(1300);
    /** The overall scroll progress with respects to this component. */
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });

    /* Delegates `onChange` events for the scroll animation.  */
    useEffect(() => {
        scrollYProgress.onChange(setProgress);
    }, []);

    return (
        <Context ref={ref}>

            {/* The left card */}
            <CardContext {...cardMotion(progress, isSmallScreen, -1)}>
                <div>
                    {
                        shouldNotInlineIcon?
                            <>
                                <img src={left.imageSrc} alt="" />
                                <h1>{ left.title }</h1>
                            </>
                            :
                            <>
                                <h1>{ left.title }</h1>
                                <img src={left.imageSrc} alt="" />
                            </>
                    }
                </div>
                <div>
                    { left.text }
                </div>
            </CardContext>

            {/* The right card */}
            <CardContext {...cardMotion(progress, isSmallScreen, 1)}>
                <div>
                    <img src={right.imageSrc} alt="" />
                    <h1>{ right.title }</h1>
                </div>
                <div>
                    { right.text }
                </div>
            </CardContext>

        </Context>
    );
}

export default CardCouple;