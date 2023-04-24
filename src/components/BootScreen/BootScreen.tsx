import React, {useEffect, useState} from "react";
import {Context, Video} from "./BootScreen.styles";


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
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;

    return (
        <Context>
            <Video id="boot-screen-video" autoPlay muted onEnded={onAnimationComplete}>
                <source src="/bootScreen/boot.mp4" type="video/mp4"/>
            </Video>
        </Context>
    );
}


export default BootScreen;
