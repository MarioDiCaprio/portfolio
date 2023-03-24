import React from "react";
import {Hexagon, Letter, StyledSvg} from "./Logo.styles";


interface LogoProps {
    /**
     * The logo's width.
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
        <StyledSvg width={width + widthUnit} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

            <Hexagon
                borderless={borderless}
                d="M 50, 5
                   L 11, 27
                   L 11, 72
                   L 50, 95
                   L 89, 73
                   L 89, 28 z"
            />

            <Letter x="50" y="50">
                M
            </Letter>

        </StyledSvg>
    );
}

export default Logo;
