import React from "react";
import Tag from "@/components/Tag";


const tableCellClass = "min-w-[100px] py-4 pr-8";

interface TableRowProps {
    year: number | string;
    name: string;
    madeAt: string;
    technologies: string[];
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
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow
                            year={2026}
                            name="NYT Connections Solver"
                            madeAt="DHBW Heidenheim"
                            technologies={["Python", "Embeddings", "LLMs"]}
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
                        />
                    </tbody>
                </table>
            </div>

        </div>
    );
}