import React from "react";
import {Hexagon, Letter, StyledSvg} from "./Logo.styles";


interface LogoProps {
    /**
     * The logo's width. The height is automatically calculated and is
     * slightly larger.
     */
    width: number;
    /**
     * The CSS length unit for the width (e.g. `px`, `%`).
     */
    widthUnit?: string;
    /**
     * Whether the logo should be borderless.
     */
    borderless?: boolean;
}


/**
 * This is the main logo as a JSX component. Its size and appearance are adjustable.
 */
export const Logo: React.FC<LogoProps> = ({ width, widthUnit = 'px', borderless = false }) => {
    return (
        <StyledSvg
            width={width + widthUnit}
            height={width * 1.16699915684 + widthUnit}
            viewBox="0 0 70.530907 82.309509"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >

            <g transform="translate(-54.172757,-25.817531)">

                <Hexagon
                    borderless={borderless}
                    d="m 108.6531,99.844207 -38.429785,-2e-6 -19.214892,-33.281173 19.214895,-33.28117 38.429782,1e-6 19.2149,33.281173 z"
                    transform="matrix(0.86589124,0.50524724,-0.49992254,0.87511389,45.270809,-36.466358)"
                />

                <Letter x="69.241219" y="81.70752" transform="scale(0.99053464,1.0095558)">
                    M
                </Letter>

            </g>

        </StyledSvg>
    );
}

export default Logo;
