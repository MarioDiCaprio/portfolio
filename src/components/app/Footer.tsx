import React from "react";
import {FaLinkedinIn as LinkedInIcon} from "react-icons/fa";
import {AiFillInstagram as InstagramIcon} from "react-icons/ai";
import {BsGithub as GitHubIcon} from "react-icons/bs";


const Footer: React.FC = () => (
    <div className="w-full flex justify-center bg-ebony-clay text-[#A3A4B3]">
        <div className="w-full max-w-[1150px]">

            {/* Footer Content */}
            <div className="w-full pt-[140px] pb-[100px] grid grid-cols-4 border-b border-[rgba(255,255,255,0.1)]">

                {/* Thanksgiving */}
                <div>
                    <h4 className="mb-5 text-2xl font-bold text-white">
                        Thanks For Visiting
                    </h4>
                    <p className="leading-[2rem]">
                        I put a lot of effort into this site and the rest of my
                        projects. I am glad you came by to visit!
                    </p>
                </div>
                
            </div>

            {/* Bottom Section */}
            <div className="w-full my-10">

                {/* Links */}
                <div className="flex gap-5 text-white text-2xl">
                    
                    <a className="
                        w-[50px] h-[50px] flex justify-center items-center rounded-[50%]
                        bg-animated-gradient bg-gradient-to-r from-[#1d1d9f] via-[#6bcbf3] to-[#1d1d9f]"
                        target="_blank" href="https://github.com/MarioDiCaprio">
                        <GitHubIcon />
                    </a>

                    <a className="
                        w-[50px] h-[50px] flex justify-center items-center rounded-[50%]
                        bg-animated-gradient bg-gradient-to-r from-[#4aa2f8] via-[#4af8f8] to-[#4aa2f8]"
                        target="_blank" href="https://www.linkedin.com/in/mario-di-caprio-a0897b243/">
                        <LinkedInIcon />
                    </a>

                    <a className="
                        w-[50px] h-[50px] flex justify-center items-center rounded-[50%]
                        bg-animated-gradient bg-gradient-to-r from-[#ec0bac] via-[#ffc861] to-[#ec0bac]"
                       target="_blank" href="https://.../">
                        <InstagramIcon />
                    </a>
                    
                </div>
                
            </div>
            
        </div>
    </div>
)

export default Footer