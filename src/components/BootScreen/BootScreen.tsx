import React from "react";
import {Context, LogoWrapper} from "./BootScreen.styles";
import Logo from "../Logo/Logo";
import {contextMotion, logoMotion} from "./BootScreen.motion";


interface BootScreenProps {
    /**
     * An event that is triggered once the boot animation completes.
     */
    onAnimationComplete: () => void;
}

/**
 * This component loads when the page first displays, performing a
 * pleasant animation.
 */
export const BootScreen: React.FC<BootScreenProps> = ({ onAnimationComplete }) => {
    return (
        <Context {...contextMotion}>
            <LogoWrapper {...logoMotion} onAnimationComplete={onAnimationComplete}>
                <Logo width={100} />
            </LogoWrapper>
        </Context>
    );
}


export default BootScreen;
