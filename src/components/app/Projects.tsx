import React from "react";
import {Button} from "@nextui-org/react";
import {FaFirefox as BrowserIcon} from "react-icons/fa";
import {BsGithub as GithubIcon} from "react-icons/bs";


const Projects: React.FC = () => (
    <>
        <div className="w-full mt-[120px] py-[120px] px-5 flex justify-center bg-[#f4f4f8]">
            <div className="w-full max-w-[1150px]">
                
                <h4 className="subtitle text-torch-red">
                    Featured Works
                </h4>
                <h3 className="title mb-12">
                    Some Of My Projects
                </h3>

                {/* Project "Complexify" */}
                <div className="w-full flex flex-col md:flex-row">
                    {/* Image */}
                    <img src="/app/projects/complexify.webp" alt="Complexify" className="w-full md:w-1/2 rounded object-contain"/>
                    {/* Content */}
                    <div className="w-full md:w-1/2 pl-0 md:pl-16">
                        <h4 className="mb-8 text-3xl font-bold">
                            Complexify
                        </h4>
                        <p className="w-full p-6 text-white-500 bg-white border border-[#e8e8efff]">
                            A tool for visualizing complex-valued functions using standard techniques such
                            as <i>Domain Coloring</i> or the stereographic projection of the <i>Riemann Sphere</i>.
                            Check it out if you are a math geek!
                        </p>
                        <div className="w-full mt-3 flex gap-5">
                            <a href="https://complexify.vercel.app" target="_blank">
                                <Button isIconOnly variant="shadow" color="primary" radius="full">
                                    <BrowserIcon size="20px"/>
                                </Button>
                            </a>
                            <a href="https://github.com/MarioDiCaprio/complexify" target="_blank">
                                <Button isIconOnly variant="shadow" color="primary" radius="full">
                                    <GithubIcon size="20px"/>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
)

export default Projects