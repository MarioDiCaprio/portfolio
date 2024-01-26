import React, {ReactNode} from "react";
import { FaCode as CodeIcon } from "react-icons/fa6";
import { FaGear as GearIcon } from "react-icons/fa6";
import { IoPeople as PeopleIcon } from "react-icons/io5";
import { TiTick as TickIcon } from "react-icons/ti";
import { FaHeart as HeartIcon } from "react-icons/fa";


interface CardProps {
    color: "rose" | "purple" | "blue";
    icon: ReactNode;
    title: string;
    items: ReactNode[];
}

const Card: React.FC<CardProps> = ({ color, icon, title, items }) => {
    // Tailwind requires to hard-code this!
    const circleBg =
        color == "rose"? "bg-rose" :
        color == "purple"? "bg-violet-eggplant" :
        "bg-curious-blue";
    const textCol =
        color == "rose"? "text-rose" :
        color == "purple"? "text-violet-eggplant" :
        "text-curious-blue";
    
    return (
        <div className="w-full flex justify-center">
            
            {/* The (centered) card */}
            <div className="w-full max-w-[700px] min-h-full p-10 flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.05)] border border-[#dae2f6]">

                {/* The top section with icon and title */}
                <div className="w-full flex items-center flex-col">
                    <div className={`w-28 h-28 flex justify-center items-center text-5xl text-white rounded-full ${circleBg}`}>
                        { icon }
                    </div>
                    <span className="font-medium text-5xl py-2">
                        { title }
                    </span>
                </div>

                {/* The bottom section with content */}
                <div className="h-full mt-10 p-10 bg-[#f4f7ff]">
                    {items.map(item => (
                        <div className="flex gap-2">
                            <span className={`flex items-center ${textCol}`}>
                                <TickIcon />
                            </span>
                            <span>
                                { item }
                            </span>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}


const Technologies: React.FC = () => (
    <div className="mt-[100px] w-full px-5 flex justify-center">
        <div className="w-full max-w-[1150px] grid grid-cols-1 lg:grid-cols-3 gap-7">
            
            <Card
                color="purple"
                icon={<CodeIcon />}
                title="Languages"
                items={[
                    "JavaScript", "TypeScript", "Java", "Kotlin", "C#", "Python"
                ]}
            />

            <Card
                color="blue"
                icon={<GearIcon />}
                title="Technologies"
                items={[
                    "React JS", "Next JS", "Tailwind CSS", "Material UI", "Next UI", "Framer Motion", "THREE JS", "Spring Boot"
                ]}
            />

            <Card
                color="rose"
                icon={<PeopleIcon />}
                title="Soft Skills"
                items={[
                    "SCRUM", "Kanban", "UI & UX Design",
                    <span className="flex gap-2">
                        Mathematics <span className="flex items-center"><HeartIcon className="text-rose"/></span>
                    </span>
                ]}
            />
            
        </div>
    </div>
)

export default Technologies