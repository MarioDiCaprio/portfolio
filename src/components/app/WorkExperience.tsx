import React, {ReactNode} from "react";
import SpotlightList from "@/components/SpotlightList";


interface ExperienceProps {
    title: string;
    subtitle: string;
    from: string;
    to: string;
    children: ReactNode;
}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <article className="py-5 grid grid-cols-3 p-5">

            {/* Time Period */}
            <header aria-label={`${props.from} to ${props.to}`} className="flex justify-start items-center">
                {props.from} - {props.to}
            </header>

            <div className="col-span-2 flex flex-col">

                {/* Title */}
                <h3 className="text-2xl font-bold">
                    {props.title}
                </h3>

                {/* Subtitle */}
                <p className="text-lg font-bold text-white-300">
                    {props.subtitle}
                </p>

                {/* Content */}
                <p className="mt-2 text-woodsmoke-200">
                    {props.children}
                </p>
            </div>

        </article>
    );
}


const experiences: ReactNode[] = [
    <Experience key="wieland" title="Wieland-Werke AG" subtitle="Dual Student" from="2023" to="Present">
        Dual degree at the DHBW Heidenheim while working in cooperation with Wieland-Werke AG,
        one of the leading producers in the metal industry.
        <br />
        I have had the pleasure of working with many teams across various projects, ranging from
        fullstack web development to creating AI-assisted information retrieval systems.
    </Experience>
];


const WorkExperience: React.FC = () => {
    return (
        <section className="w-full max-w-5xl mx-auto mt-40">
            <h1 className="text-center title mb-12">
                Work Experience
            </h1>
            <SpotlightList>
                {experiences}
            </SpotlightList>
        </section>
    );
};

export default WorkExperience;