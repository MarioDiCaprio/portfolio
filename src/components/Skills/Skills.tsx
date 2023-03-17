import React, {useRef} from 'react';
import {useMotionValue, useMotionValueEvent, useScroll, useSpring} from "framer-motion";
import CardCouple from "../CardCouple/CardCouple";
import {fadeOnScrollEffect} from "../../styles/presets.motion";
import {Arrow, ArrowBody, ArrowHead, CardWrapper, Context, Subtitle, Title} from "./Skills.styles";
import {VibrantCode} from "../../styles/presets.styles";


/**
 * This component highlights the author's skills. It consists of skills
 * wrapped inside of {@link CardCouple}s stacked upon each other. Also,
 * there is an arrow on top of this component that expands downwards
 * as the page scrolls, fitting perfectly with the `CardCouple` animation.
 * This component is responsive: The arrow is hidden on small screens.
 * @see CardCouple
 */
const SkillsPanel: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const arrow = useMotionValue(0);

    const arrowBodyHeight = useMotionValue(0);

    const arrowHeadTop = useSpring(arrow, {
        stiffness: 100,
        damping: 13,
        duration: 0.5
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end center']
    });

    useMotionValueEvent(scrollYProgress, "change", val => {
        let maximum = ref.current?.clientHeight ?? 0;
        arrow.set(val * (maximum + 200));
    });

    useMotionValueEvent(arrowHeadTop, "change", val => {
        arrowBodyHeight.set(val + 40);
    });


    return (
        <Context id="skills" {...fadeOnScrollEffect}>

            {/* The panel's title */}
            <Title>
                <VibrantCode>
                    02.
                </VibrantCode>
                My Skills
            </Title>

            <Subtitle>
                What tools do I use?
            </Subtitle>

            <Arrow>

                {/* The arrow's body */}
                <ArrowBody style={{ height: arrowBodyHeight }} />

                {/* The arrow's head */}
                <ArrowHead style={{ top: arrowHeadTop }} viewBox="0 0 237.64 237.64">
                    <path xmlns="http://www.w3.org/2000/svg" d="M7.954,226.53c-2.23,4.623-2.295,8.072-0.609,9.915c3.911,4.275,15.926-3.905,23.323-9.051   l58.416-40.662c7.397-5.145,20.402-11.835,29.414-11.993c0.897-0.016,1.8-0.011,2.703,0.011c9.007,0.218,21.958,7.016,29.3,12.238   l56.403,40.151c7.343,5.221,19.303,13.473,23.301,9.219c1.74-1.849,1.751-5.33-0.381-9.997L129.648,7.047   c-4.264-9.333-11.335-9.404-15.79-0.163L7.954,226.53z"/>
                </ArrowHead>

            </Arrow>


            {/* A wrapper for the cards */}
            <CardWrapper ref={ref}>

                {/* React & Next */}
                <CardCouple
                    left={{
                        title: 'React Js',
                        imageSrc: '/img/react.png',
                        text:
                            `I love the way React lets you isolate each part of a website into single components.
                            The event-driven style that comes with this library is also extremely useful and easy
                            to use.`
                    }}
                    right={{
                        title: 'Next Js',
                        imageSrc: '/img/next.png',
                        text:
                            `Built on top of React, Next Js is my framework of choice. I love how it provides a clear
                            project structure and many useful features from the get-go. It is also really easy to deploy
                            projects to Vercel!`
                    }}
                />

                {/* Redux & Framer */}
                <CardCouple
                    left={{
                        title: 'Redux',
                        imageSrc: '/img/redux.png',
                        text:
                            `This is perhaps the best state-management library there is. Redux lets you easily manage
                            states across your whole application. RTK-Query also adds seamless support for
                            connecting to a REST service!`
                    }}
                    right={{
                        title: 'Framer',
                        imageSrc: '/img/framer.png',
                        text:
                            `Framer helps to create beautiful animations with few lines of code, such as this one!
                            If used correctly, it can help to create awesome-looking applications.`
                    }}
                />

                {/* Cypress & Storybook */}
                <CardCouple
                    left={{
                        title: 'Cypress',
                        imageSrc: '/img/cypress.png',
                        text:
                            `This is my testing library of choice. Cypress seamlessly provides unit tests and
                            integration tests out of the box. It also has support for modern third-party libraries,
                            making the whole process even more straightforward.`
                    }}
                    right={{
                        title: 'Storybook',
                        imageSrc: '/img/storybook.png',
                        text:
                            `Along with Cypress, Storybook is extremely useful to test and view components in isolation.
                            This becomes especially clear when the application grows in size and keeping track of
                            each component becomes harder!`
                    }}
                />

                {/* Typescript & Sass */}
                <CardCouple
                    left={{
                        title: 'TypeScript',
                        imageSrc: '/img/typescript.png',
                        text:
                            `TypeScript is, simply but, the complete version of JavaScript. Adding typing compatibility,
                            it makes up for what JavaScript simply lacks. Developing larger applications becomes
                            much easier too, because of the additional documentation that types infer.`
                    }}
                    right={{
                        title: 'Sass',
                        imageSrc: '/img/sass.png',
                        text:
                            `Sass (or Scss) is a helpful precompiler for standard CSS. It adds a ton of features, such as
                            mixins, extensions and a proper support for variables, which makes development much more
                            compact.`
                    }}
                />

            </CardWrapper>

        </Context>
    );
}

export default SkillsPanel;
