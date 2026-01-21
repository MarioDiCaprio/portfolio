import React from "react";
import {ArrowDown} from "lucide-react";


const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full pt-40 flex flex-col items-center">
            <h1 className="mb-4 text-center text-6xl font-bold">
                Mario Di Caprio
            </h1>
            <h2 className="
                    mb-7 text-center text-6xl font-bold text-gradient">
                Software Developer
            </h2>
            <p className="w-full max-w-[400px] text-center text-woodsmoke-200">
                I am a fullstack engineer specializing in frontend development. Currently, I am
                pursuing a dual degree in computer science
                at <a href="https://www.wieland.com" target="_blank" className="link-inline">Wieland-Werke AG</a>.
                Based in Ulm, Germany.
            </p>
            <div aria-hidden className="w-full h-full mt-20 flex justify-center items-center text-4xl">
                <ArrowDown size="1em" className="animate-bounce" />
            </div>
        </section>
    );
}

export default HeroSection;