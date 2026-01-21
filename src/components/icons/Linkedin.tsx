import {FC} from "react";
import {IconProps, iconPropsOrDefault} from "@/components/icons/iconProps";


const Linkedin: FC<IconProps> = (props) => {
    const { size, strokeWidth } = iconPropsOrDefault(props);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
            </g>
        </svg>
    );
}

export default Linkedin;
