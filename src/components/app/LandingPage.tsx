import React from "react";


const LandingPage: React.FC = () => (
    <div className="
        relative w-full h-[105vh] min-h-[800px] lg:min-h-[900px] px-5 md:px-20 lg:px-[100px] py-0 lg:py-5
        flex justify-start items-center
        bg-[url('/app/landing-page/wallpaper.svg')] bg-no-repeat bg-cover">

        {/* White triangle at the bottom of the wallpaper */}
        <div
            className="
                w-full h-20 lg:h-[200px]
                absolute left-0 bottom-[-1px]
                content-[''] bg-white"
            style={{ clipPath: 'polygon(71.5% 0, 0% 100%, 100% 100%)' }}
        />

        {/* Floating Mobile Phone */}
        <div className="w-[22vw] min-w-[300px] absolute right-0 lg:right-[5vw] xl:right-[15vw] hidden lg:block">
            <img src="/app/landing-page/iphone.svg" alt="" className="w-full" />
        </div>

        {/* Content Container */}
        <div className="max-w-[670px]">

            {/* Banner Container */}
            <div className="
                w-full sm:w-[380px] flex flex-col sm:flex-row
                text-xs text-center uppercase font-semibold tracking-[2px]">
                
                {/* Banner 1 */}
                <div className="
                    w-full sm:w-2/3 h-full py-[10px] px-[30px]
                    rounded-t-md sm:rounded-tr-none sm:rounded-l-md
                    bg-[#0000001A] text-white rounded-l-md">
                    Mario Di Caprio
                </div>

                {/* Banner 2 */}
                <a className="
                    w-full sm:w-1/3 h-full py-[10px] px-[30px]
                    rounded-b-md sm:rounded-bl-none sm:rounded-r-md
                    duration-500 hover:bg-ebony-clay hover:text-white
                    bg-portica no-underline"
                    href="https://github.com/MarioDiCaprio" target="_blank">
                    GitHub
                </a>
                
            </div>

            {/* Title */}
            <h1 className="mt-3 mb-6 text-white font-bold"
                style={{ fontSize: 'clamp(50px, 10vw, 5rem)', lineHeight: 'clamp(50px, 10vw, 5rem)' }}>
                Hi, I am <br />
                Mario Di Caprio
            </h1>

            {/* Summary */}
            <p className="mb-16 leading-8 text-white">
                I am an aspiring software engineer based in Ulm, Germany. At the moment, I am
                studying computer science and working at {' '}
                <a href="https://wieland.com" target="_blank" className="underlined-link font-bold">
                    Wieland-Werke AG
                </a>.
            </p>

            {/* GitHub Button */}
            <a className="
                py-5 px-10
                font-bold text-white no-underline
                border-2 border-white rounded
                duration-500 hover:bg-ebony-clay hover:border-ebony-clay"
                href="https://github.com/MarioDiCaprio" target="_blank">
                View My GitHub
            </a>
            
        </div>
        
    </div>
)

export default LandingPage