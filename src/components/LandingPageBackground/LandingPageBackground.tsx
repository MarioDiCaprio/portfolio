import React from "react";
import {Context} from "./LandingPageBackground.styles";


const LandingPageBackground: React.FC = () => {
    return (
        <Context src="/landing-page/landing-page-bg2.mp4" autoPlay muted loop />
    );
}


export default LandingPageBackground;