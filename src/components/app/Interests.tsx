"use client"

import React, {useState} from "react";
import {LayoutGroup, motion, MotionProps, useAnimationFrame, useMotionValue, useMotionValueEvent} from "framer-motion";
import {useScreen} from "@/hooks/tailwindHooks";


export function interestContainerMotion(active: boolean): MotionProps {
    if (active) {
        return {
            animate: { opacity: 1 },
            transition: { duration: 0.4, delay: 0.4 }
        };
    }
    return {
        animate: { opacity: 0 },
        transition: { duration: 0.4 }
    };
}


const Interests: React.FC = () => {
    const isScreenSm = useScreen('sm');
    const isScreenXl = useScreen('xl');
        
    const [active, setActive] = useState<number>(0);
    
    ///////////////////////////////////////////////////////////////////////////////

    const theta = useMotionValue<number>(0);
    useAnimationFrame((timestamp, _delta) => {
        theta.set(timestamp * 0.02);
    });

    const circleRotation = useMotionValue<number>(0);
    useMotionValueEvent(theta, 'change', value => {
        let tmp = Math.sin(value * (Math.PI / 180)) * 10;
        circleRotation.set(tmp);
    });

    ///////////////////////////////////////////////////////////////////////////////

    const itemTransition: MotionProps['transition'] = {
        duration: 0.8,
        ease: "easeOut"
    }
    
    function itemPosition(index: number): MotionProps['animate'] {
        // NOTE: Please change this number depending on how many interests you have!
        const numberOfItems = 6;

        // NOTE: Please change this depending on how you set your breakpoints!
        const itemSize = isScreenXl? 75 : 50;
        const activeItemSize = isScreenXl? 160 : 100;
        const containerSize = isScreenXl? 475: isScreenSm? 350 : 300;

        if (index === active) {
            return {
                x: (-activeItemSize + containerSize) / 2,
                y: (-containerSize - activeItemSize) / 2,
                width: activeItemSize,
                height: activeItemSize
            }
        }
        
        // considering Euler's formula for the unit circle on the complex plane: e^(ix) = cos(x) + i*sin(x)
        // since C has a trivial isomorphism to R^2: a + ib -> (a, b)
        // cos(x) is the position on the x-axis and sin(x) is the position on the y-axis
        let fac = 2 * Math.PI / numberOfItems * index;
        let x = (Math.cos(fac) * containerSize + containerSize - itemSize) / 2 + 'px';
        let y = (Math.sin(fac) * containerSize - containerSize - itemSize) / 2 + 'px';

        return { x, y, width: itemSize, height: itemSize };
    }
    
    return (
        <div className="w-full mt-10 flex justify-center">
            <div className="
                w-full max-w-[1150px] pt-5 lg:py-24 mb-[300px] lg:mb-0
                flex justify-around items-center flex-col lg:flex-row">

                {/* Container for big circle on left (with items) */}
                <motion.div className="
                    w-[300px] sm:w-[350px] xl:w-[475px]
                    h-[300px] sm:h-[350px] xl:h-[475px]
                    mb-12 lg:mb-0 relative overflow-visible"
                    style={{ rotate: circleRotation }}>

                    {/* the circle */}
                    <img src="/app/interests/circle.svg" alt="" width="100%"/>

                    {/* the items around the circle */}
                    <LayoutGroup>

                        <motion.img
                            className="absolute rounded-[50%] bg-white select-none cursor-pointer"
                            src="/app/interests/chess.webp" alt=""
                            layout animate={itemPosition(0)} transition={itemTransition}
                            onClick={() => setActive(0)}
                        />
                        
                        <motion.img
                            className="absolute rounded-[50%] bg-white select-none cursor-pointer"
                            src="/app/interests/coding.webp" alt=""
                            layout animate={itemPosition(1)} transition={itemTransition}
                            onClick={() => setActive(1)}
                        />
                        
                        <motion.img
                            className="absolute rounded-[50%] bg-white select-none cursor-pointer"
                            src="/app/interests/gym.webp" alt=""
                            layout animate={itemPosition(2)} transition={itemTransition}
                            onClick={() => setActive(2)}
                        />
                        
                        <motion.img
                            className="absolute rounded-[50%] bg-white select-none cursor-pointer"
                            src="/app/interests/pasta.webp" alt=""
                            layout animate={itemPosition(3)} transition={itemTransition}
                            onClick={() => setActive(3)}
                        />
                        
                        <motion.img
                            className="absolute rounded-[50%] bg-white select-none cursor-pointer"
                            src="/app/interests/modelling.webp" alt=""
                            layout animate={itemPosition(4)} transition={itemTransition}
                            onClick={() => setActive(4)}
                        />

                        <motion.img
                            className="absolute rounded-[50%] bg-white select-none cursor-pointer"
                            src="/app/interests/hiking.webp" alt=""
                            layout animate={itemPosition(5)} transition={itemTransition}
                            onClick={() => setActive(5)}
                        />
                        
                    </LayoutGroup>

                </motion.div>

                {/* Container for actual content */}
                <div className="w-full lg:w-[calc(100%-475px)] max-w-[700px] px-5 md:pl-[50px] xl:pl-[100px]">
                    
                    <h4 className="subtitle text-torch-red">
                        A Bit More About Myself
                    </h4>
                    <h3 className="title mb-5">
                        Some Of My Interests
                    </h3>

                    {/* container for the content */}
                    <div className="relative select-none">
                        
                        <motion.div className="absolute" {...interestContainerMotion(active === 0)}>
                            <h4 className="mb-2.5 text-2xl font-bold">
                                Chess
                            </h4>
                            <div className="text-lg font-light text-white-500">
                                Some years ago, I started cultivating an interest in chess. I love
                                learning new openings, improving my middle- and endgame and putting
                                my skills to the test on official tournaments!
                            </div>
                        </motion.div>

                        <motion.div className="absolute" {...interestContainerMotion(active === 1)}>
                            <h4 className="mb-2.5 text-2xl font-bold">
                                Software Development
                            </h4>
                            <div className="text-lg font-light text-white-500">
                                Obviously, this one had to be on the list, being the foundation
                                of my career as a software developer. Learning new tools and staying
                                up-to-date is also part of the job!
                            </div>
                        </motion.div>

                        <motion.div className="absolute" {...interestContainerMotion(active === 2)}>
                            <h4 className="mb-2.5 text-2xl font-bold">
                                Weightlifting
                            </h4>
                            <div className="text-lg font-light text-white-500">
                                I am a firm believer that staying in tip-top shape and regularly
                                working your muscles raises your confidence like few other things
                                do. Plus, its super fun!
                            </div>
                        </motion.div>

                        <motion.div className="absolute" {...interestContainerMotion(active === 3)}>
                            <h4 className="mb-2.5 text-2xl font-bold">
                                Cooking
                            </h4>
                            <div className="text-lg font-light text-white-500">
                                Before moving out for the first time, I have started to appreciate
                                the various comfort-foods that different cultures can bring. It is
                                always good to have a dish or two up your sleeves to impress friends
                                and family!
                            </div>
                        </motion.div>

                        <motion.div className="absolute" {...interestContainerMotion(active === 4)}>
                            <h4 className="mb-2.5 text-2xl font-bold">
                                3D Modelling
                            </h4>
                            <div className="text-lg font-light text-white-500">
                                While I would never consider myself an expert, 3D modelling is
                                definitely an interesting pastime.
                            </div>
                        </motion.div>

                        <motion.div className="absolute" {...interestContainerMotion(active === 5)}>
                            <h4 className="mb-2.5 text-2xl font-bold">
                                Hiking
                            </h4>
                            <div className="text-lg font-light text-white-500">
                                One of my favourite things to do is going on long hikes
                                and being out in the open, exploring the beauties mother
                                nature has to offer!
                            </div>
                        </motion.div>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    )
}


export default Interests