import React, {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import { FaGitAlt as GitIcon } from "react-icons/fa6";
import { BiLogoTypescript as TypeScriptIcon } from "react-icons/bi";
import { FaReact as ReactIcon } from "react-icons/fa";
import { SiNextdotjs as NextIcon } from "react-icons/si";
import { FaVuejs as VueIcon } from "react-icons/fa";
import { SiTailwindcss as TailwindIcon } from "react-icons/si";
import { SiBlazor as BlazorIcon } from "react-icons/si";
import { SiDocker as DockerIcon } from "react-icons/si";
import { SiSupabase as SupabaseIcon } from "react-icons/si";
import { SiOpengl as OpenGlIcon } from "react-icons/si";
import { FaPython as PythonIcon } from "react-icons/fa";
import { VscAzure as AzureIcon } from "react-icons/vsc";
import { LuGalleryVerticalEnd as GalleryIcon } from "react-icons/lu";
import { FaExternalLinkAlt as LinkIcon } from "react-icons/fa";

import ComplexifyImage from "@/../public/app/projects/complexify.webp";
import SpacesImage from "@/../public/app/projects/spaces.webp";
import WielandMaterialsRankerImage from "@/../public/app/projects/wieland_materials_ranker.webp";
import SpotlightList from "@/components/SpotlightList";
import {UrlObject} from "node:url";


type Technology = 'Git' | 'TypeScript' | 'React' | 'Next' | 'Vue' | 'Tailwind' | 'Blazor' | 'Docker' | 'Supabase' | 'OpenGL' | 'Python' | 'Azure';

const technologyIcons: Record<Technology, React.JSX.Element> = {
    'Git': <GitIcon aria-hidden />,
    'TypeScript': <TypeScriptIcon aria-hidden />,
    'React': <ReactIcon aria-hidden />,
    'Next': <NextIcon aria-hidden />,
    'Vue': <VueIcon aria-hidden />,
    'Tailwind': <TailwindIcon aria-hidden />,
    'Blazor': <BlazorIcon aria-hidden />,
    'Docker': <DockerIcon aria-hidden />,
    'Supabase': <SupabaseIcon aria-hidden />,
    'OpenGL': <OpenGlIcon aria-hidden />,
    'Python': <PythonIcon aria-hidden />,
    'Azure': <AzureIcon aria-hidden />,
};

interface ProjectProps {
    title: string;
    subtitle: string;
    description: ReactNode;
    image: StaticImport;
    imageAlt: string;
    technologies?: Technology[];
    link?: {
        href: string | UrlObject;
        text: string;
    };
}

export const Project: React.FC<ProjectProps> = (props) => {
    return (
        <article className="py-5 group relative p-[1.5px] overflow-hidden rounded-xl">

            {/* container */}
            <div className="w-full p-5 overflow-hidden rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-5">

                {/* image */}
                <figure>
                    <Image
                        src={props.image}
                        alt={props.imageAlt}
                        className="w-full object-cover rounded-xl"
                    />
                </figure>

                {/* project body */}
                <div className="col-span-2 flex flex-col">

                    {/* title */}
                    <h3 className="text-2xl font-bold">
                        <span>{props.title}</span>
                    </h3>

                    {/* subtitle */}
                    <p className="text-lg font-bold text-white-300">
                        {props.subtitle}
                    </p>

                    {/* Link to site */}
                    {props.link && (
                        <Link href={props.link.href} target="_blank" className="link-inline py-2 flex items-center gap-2 w-fit  text-sm">
                            <LinkIcon aria-hidden />
                            <span>{props.link.text}</span>
                        </Link>
                    )}

                    {/* description */}
                    <p aria-label="project description" className="pb-3 mt-2 mb-auto">
                        {props.description}
                    </p>

                    {/* divider */}
                    <hr aria-hidden className="border-black-900"/>

                    {/* footer */}
                    <footer aria-label="technologies" className="py-3">
                        {/* technologies */}
                        <ul className="list-none text-xl flex items-center gap-3 flex-wrap">
                            {props.technologies?.map(t =>
                                <li key={t}>
                                    <div className="py-1 px-2 flex items-center gap-2 text-xs bg-rose/30 rounded-xl text-rose-300">
                                        {technologyIcons[t]}
                                        <span>
                                            {t}
                                        </span>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </footer>
                </div>

            </div>
        </article>
    );
}

const projectList: ReactNode[] = [
    <Project
        key="complexify"
        title="Complexify"
        subtitle="Personal Project"
        image={ComplexifyImage}
        imageAlt="Complexify"
        description={<>
            Web app for visualizing complex-valued functions with popular methods, such as
            domain coloring and the stereographic projection thereof onto the Riemann sphere.
            High performance and fully interactive graphs.
        </>}
        technologies={['React', 'Next', 'Tailwind', 'OpenGL', 'Git']}
        link={{ text: "View Site", href: "https://complexify.mariodicaprio.com" }}
    />,
    <Project
        key="spaces"
        title="Spaces"
        subtitle="University Project"
        image={SpacesImage}
        imageAlt="Spaces"
        description={<>
            A Twitter-inspired social media application. Built with Blazor on the frontend and
            ASP.Net on the backend, with the MVVM pattern. SCRUM team of five students.
        </>}
        technologies={['Blazor', 'Tailwind', 'Docker', 'Supabase', 'Git']}
    />,
    <Project
        key="ir-system"
        title="Information Retrieval System"
        subtitle="Enterprise Project"
        image={WielandMaterialsRankerImage}
        imageAlt="UI of the information retrieval system"
        description={<>
            Built an Information Retrieval (IR) system for retrieving metals relevant to specific customer
            queries at <a href="https://www.wieland.com" target="_blank" className="link-inline">Wieland-Werke AG</a>.
            The system used technologies in the Azure AI suite and Azure Functions. Minimal frontend built with Vue.
        </>}
        technologies={['Python', 'Azure', 'Vue', 'Tailwind', 'Git']}
        link={{ text: "View Case Study", href: "/projects/wieland-materials-ranker" }}
    />
]

const Projects: React.FC = () => {
    return (
        <section className="relative w-full max-w-5xl mx-auto mt-40">
            <h2 className="text-center title">
                Project Gallery
            </h2>
            <SpotlightList className="my-12">
                {projectList}
            </SpotlightList>
            <footer className="text-center text-xl">
                <Link href="/projects" target="_blank" className="link flex justify-center items-center gap-3">
                <span aria-hidden>
                    <GalleryIcon />
                </span>
                    <span>
                    View full gallery
                </span>
                </Link>
            </footer>
        </section>
    );
}

export default Projects;