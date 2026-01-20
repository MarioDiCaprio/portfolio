import React, {ReactNode} from "react";
import Tag from "@/components/Tag";
import Link from "next/link";
import { FaExternalLinkAlt as ExternalLinkIcon } from "react-icons/fa";
import { FaBookOpen as BookIcon } from "react-icons/fa6";


const tableCellClass = "min-w-[100px] py-4 pr-8";

interface TableRowProps {
    year: number | string;
    name: string;
    madeAt: string;
    technologies: string[];
    links?: {
        icon?: ReactNode;
        name: string;
        href: string;
    }[];
}

const TableRow: React.FC<TableRowProps> = (props) => (
    <tr className="">
        {/* Year */}
        <td className={`${tableCellClass} text-woodsmoke-300`}>
            {props.year}
        </td>
        {/* Name */}
        <td className={tableCellClass}>
            {props.name}
        </td>
        {/* Made At */}
        <td className={`${tableCellClass} text-woodsmoke-300`}>
            {props.madeAt}
        </td>
        {/* Technologies */}
        <td className={tableCellClass}>
            <ul className="list-none flex gap-3 flex-wrap">
                {props.technologies.map(technology => (
                    <li key={technology}>
                        <Tag key={technology}>
                            {technology}
                        </Tag>
                    </li>
                ))}
            </ul>
        </td>
        {/* Links */}
        <td className={tableCellClass}>
            {props.links && (
                <ul className="list-none flex flex-col gap-2">
                    {props.links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} target="_blank" className="link flex items-center gap-2 text-nowrap">
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </td>
    </tr>
);


export default function Projects() {
    return (
        <div className="max-w-[1200px] w-full mx-auto p-5">
            <header>
                <h1 className="text-4xl">
                    Project Gallery
                </h1>
            </header>

            <div className="w-full mt-5 overflow-x-auto">
                <table className="min-w-[1000px] text-left text-sm">
                    <thead>
                        <tr>
                            <th className={tableCellClass}>Year</th>
                            <th className={tableCellClass}>Project</th>
                            <th className={tableCellClass}>Made At</th>
                            <th className={tableCellClass}>Keywords</th>
                            <th className={tableCellClass}>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow
                            year={2026}
                            name="NYT Connections Solver"
                            madeAt="DHBW Heidenheim"
                            technologies={["Python", "Embeddings", "LLMs"]}
                            links={[
                                {
                                    href: "/projects/nyt-connections-solver",
                                    name: "Case Study",
                                    icon: <BookIcon />
                                }
                            ]}
                        />
                        <TableRow
                            year={2025}
                            name="GoDrive | Cloud Storage System"
                            madeAt="DHBW Heidenheim"
                            technologies={["React", "GoLang", "MinIO", "Postgres", "NGINX", "Docker"]}
                        />
                        <TableRow
                            year={2025}
                            name="Wieland Materials Searcher"
                            madeAt="Wieland-Werke AG"
                            technologies={["Python", "Embeddings", "Azure AI", "Azure Functions", "Vue"]}
                            links={[
                                {
                                    href: "/projects/wieland-materials-ranker",
                                    name: "Case Study",
                                    icon: <BookIcon />
                                }
                            ]}
                        />
                        <TableRow
                            year={2024}
                            name="Wieland Scanner Configurator"
                            madeAt="Wieland-Werke AG"
                            technologies={["SAP OpenUI5", "JavaScript", "Java", "Hibernate", "Oracle DB"]}
                        />
                        <TableRow
                            year={2024}
                            name="Spaces | Social Media Website"
                            madeAt="DHBW Heidenheim"
                            technologies={["C#", "Blazor", "ASP.NET", "Postgres", "Docker"]}
                            links={[
                                {
                                    href: "/projects/wieland-materials-ranker",
                                    name: "Case Study",
                                    icon: <BookIcon />
                                }
                            ]}
                        />
                        <TableRow
                            year={2024}
                            name="Wieland Alloy Wizard"
                            madeAt="Wieland-Werke AG"
                            technologies={["Vue", "Bootstrap", "Sass", "Storybook", "Vitest"]}
                        />
                        <TableRow
                            year={2023}
                            name="Complexify | Complex Function Visualizer"
                            madeAt="Personal Project"
                            technologies={["React", "Next.JS", "Redux Toolkit", "OpenGL", "ANTLR4"]}
                            links={[
                                {
                                    href: "https://complexify.mariodicaprio.com",
                                    name: "View Site",
                                    icon: <ExternalLinkIcon />
                                },
                                {
                                    href: "/projects/complexify",
                                    name: "Case Study",
                                    icon: <BookIcon />
                                }
                            ]}
                        />
                    </tbody>
                </table>
            </div>

        </div>
    );
}