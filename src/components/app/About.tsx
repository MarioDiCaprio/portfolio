import React, {ReactNode} from "react";
import {GiTechnoHeart as HeartIcon} from "react-icons/gi";
import {FaGlobeAmericas as GlobeIcon} from "react-icons/fa";


const About: React.FC = () => (
    <div className="w-full flex justify-center">
        <div className="w-full max-w-[1150px] mt-24 flex flex-col sm:flex-row">

            {/* Box with my picture */}
            <div className="w-[90%] md:w-1/2 self-center md:self-start justify-self-center md:justify-self-start">
                <img src="/app/about/selfie.png" alt="Mario Di Caprio" className="w-full select-none self-center"/>
            </div>

            {/* Box with content about me */}
            <div className="w-full md:w-1/2 px-3 md:pl-16 py-2.5 md:py-0">
                
                <h4 className="subtitle text-torch-red">
                    A Little About Myself
                </h4>
                <h3 className="title mb-12">
                    Who Is Mario
                </h3>

                <div className="relative w-full flex gap-6">
                    
                    {/* Icon */}
                    <div className="w-[85px] h-[85px] p-2.5 rounded-[50%] text-white bg-gradient-to-br from-rose to-portica">
                        <HeartIcon className="w-full h-full" />
                    </div>

                    {/* Line connecting two icons */}
                    <div className="z-[-1] absolute left-[42.5px] translate-x-[-50%] w-[1px] h-full bg-white-200"/>

                    {/* Content */}
                    <div className="w-[calc(100%-85px)] mb-10">
                        <h4 className="mb-4 text-2xl font-bold">
                            I'm a sucker for technology
                        </h4>
                        <p className="m-0 text-lg text-white-500">
                            Since I was 14 years old, I loved the art of of software development and turning complex
                            problems into simple, beautiful solutions.
                        </p>
                    </div>
                    
                </div>

                <div className="w-full mb-10 flex gap-6">

                    {/* Icon */}
                    <div className="w-[85px] h-[85px] p-2.5 rounded-[50%] text-white bg-gradient-to-br from-rose to-portica">
                        <GlobeIcon className="w-full h-full" />
                    </div>

                    {/* Content */}
                    <div className="w-[calc(100%-85px)]">
                        <h4 className="mb-4 text-2xl font-bold">
                            I'm always eager to learn
                        </h4>
                        <p className="m-0 text-lg text-white-500">
                            Learning new skills, getting to know new cultures and broadening the spectrum of your
                            understanding is one way to live a fulfilling life.
                        </p>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
)

export default About