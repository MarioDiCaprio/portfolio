import React from "react";
import {Content, Context, LinksSection} from "./Navbar.styles";
import NavLink from "../NavLink/NavLink";
import {useMediaQuery, useTheme} from "@mui/material";
import {HiOutlineMenuAlt3 as MenuIcon} from "react-icons/hi";


const Navbar: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(750));

    if (isSmallScreen) {
        return (
            <Context>
                <Content>
                    <span>
                        Mario Di Caprio
                    </span>
                    <MenuIcon fontSize="2rem" />
                </Content>
            </Context>
        );
    }

    return (
        <Context>
            <Content>
                <span>
                    Mario Di Caprio
                </span>
                <LinksSection>
                    <NavLink>
                        Home
                    </NavLink>
                    <NavLink>
                        About
                    </NavLink>
                    <NavLink>
                        Projects
                    </NavLink>
                    <NavLink>
                        Interests
                    </NavLink>
                    <NavLink>
                        Contact
                    </NavLink>
                </LinksSection>
            </Content>
        </Context>
    );
}

export default Navbar;