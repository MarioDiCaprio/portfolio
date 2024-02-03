import React, {ReactNode} from "react";
import PageTransition from "@/components/PageTransition";

const Template: React.FC<{ children?: ReactNode }> = ({ children }) => (
    <PageTransition>
        {children}
    </PageTransition>
)

export default Template