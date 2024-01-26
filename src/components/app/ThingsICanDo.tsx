import React, {ReactNode} from "react";
import { IoColorPaletteSharp as UiUxIcon } from "react-icons/io5";
import { FaReact as FrontendIcon } from "react-icons/fa6";
import { BsServer as BackendIcon } from "react-icons/bs";


interface CardProps {
    color: "rose" | "purple" | "blue"
    icon: ReactNode;
    title: string;
}

const Card: React.FC<CardProps> = ({ color, icon, title }) => {
    // Tailwind requires to hard-code this!
    const circleBg =
        color == "rose"? "bg-rose" :
        color == "purple"? "bg-violet-eggplant" :
        "bg-curious-blue";
    const afterBg =
        color == "rose"? "after:bg-rose" :
        color == "purple"? "after:bg-violet-eggplant" :
        "after:bg-curious-blue";
    
    return (
        <div className={`
            relative w-full sm:w-52 h-56 flex flex-col justify-center items-center gap-2.5
            font-semibold border border-[#e8e8efff] shadow-[0_0_30px_rgba(0,0,0,0.04)]
            after:content-[''] after:h-[3px] after:w-full after:scale-x-100 sm:after:scale-x-0 hover:after:scale-x-100
            after:absolute after:top-0 after:duration-500 ${afterBg}`}>
            <div>
                <div className={`w-28 h-28 mb-2 flex justify-center items-center ${circleBg} text-white text-5xl rounded-full`}>
                    { icon }
                </div>
                <span>
                    { title }
                </span>
            </div>
        </div>
    )
}


const ThingsICanDo: React.FC = () => (
    <div className="w-full flex justify-center">
        <div className="w-full max-w-[1150px] pt-10 text-center">

            <h4 className="subtitle text-violet-eggplant">
                Check This Out
            </h4>
            <h3 className="title mb-10 text-ebony-clay">
                Things I Can Do
            </h3>

            {/* Wrapper for language cards */}
            <div className="w-full h-full flex justify-center flex-wrap gap-8">
                
                <Card
                    color="purple"
                    icon={<UiUxIcon />}
                    title="UI & UX Design"
                />

                <Card
                    color="blue"
                    icon={<FrontendIcon />}
                    title="Frontend"
                />

                <Card
                    color="rose"
                    icon={<BackendIcon />}
                    title="Backend"
                />

            </div>

        </div>
    </div>
)

export default ThingsICanDo