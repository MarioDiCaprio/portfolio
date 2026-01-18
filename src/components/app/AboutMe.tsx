import React from "react";
import Image from "next/image";


const AboutMe: React.FC = () => (
    <section className="relative w-full max-w-3xl mx-auto mt-30 mb-30 flex flex-col items-center gap-8">
        <h2 className="title mb-5">
            A Little About Myself
        </h2>
        <article className="grid grid-cols-1 lg:grid-cols-2">
            <figure className="relative w-[200px] lg:w-[300px] aspect-square m-auto rounded-full overflow-hidden">
                <Image
                    fill
                    src="/app/about/profile-pic.png"
                    alt="Picture of Mario Di Caprio"
                    className="object-cover"
                />
            </figure>
            <div className="m-auto pt-4 lg:pt-0 text-center lg:text-left flex flex-col gap-4">
                <p>
                    I am experienced in many fullstack technologies and am passionate about building
                    user-friendly, accessible websites. I have worked with multiple agile teams
                    on both academic and enterprise projects.
                </p>
                <p>
                    Outside of work, you can find me in the gym, hanging out with my boyfriend, or more recently,
                    playing Yu-Gi-Oh!
                </p>
            </div>
        </article>
    </section>
);

export default AboutMe;