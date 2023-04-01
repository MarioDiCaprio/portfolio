import React from "react";
import {Context} from "./LandingPageBackground.styles";
import {contextMotion} from "./LandingPageBackground.motion";


const LandingPageBackground: React.FC = () => {
    return (
        <Context
            {...contextMotion}
            src="/landing-page/landing-page-bg.mp4"
            autoPlay
            muted
            loop
        />
    );
}


export default LandingPageBackground;