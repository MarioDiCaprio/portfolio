import React, {ReactNode} from "react";


interface TagProps {
    icon?: ReactNode;
    className?: string;
    children: ReactNode;
}

const Tag: React.FC<TagProps> = ({ icon, className, children }) => (
    <div className={`py-1 px-2 flex items-center gap-2 text-xs bg-rose/30 rounded-xl text-rose-300 ${className}`}>
        {icon}
        <span>
            {children}
        </span>
    </div>
);

export default Tag;
