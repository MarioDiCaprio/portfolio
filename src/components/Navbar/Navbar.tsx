import React, {useEffect, useState} from "react";
import {useScroll, useVelocity} from "framer-motion";
import {AiOutlineMenu as MenuIcon} from "react-icons/ai";
import {useSmallScreen} from "../../hooks/useScreen";
import {Context, Links, MenuButtonWrapper} from "./Navbar.styles";
import Sidebar from "../Sidebar/Sidebar";
import NavbarLink from "../NavbarLink/NavbarLink";
import {menuButtonMotion} from "./Navbar.motion";
import Logo from "../Logo/Logo";


/**
 * This is the page's navbar. It contains the logo and useful links to
 * scroll to. On small screens, contains a button that opens a sidebar
 * to access those links.
 * The Navbar is elevated when scrolled away from the top of the page
 * and generally hidden when scrolled down, but shown when scrolled
 * up.
 */
export const Navbar: React.FC = () => {
    const isSmallScreen = useSmallScreen();
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const [isElevated, setIsElevated] = useState<boolean>(false);
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        scrollY.onChange(y => {
            setIsElevated(y > 100);
        });
        scrollVelocity.onChange(v => {
            if (v > 0) {
                setIsHidden(true);
            } else if (v < 0) {
                setIsHidden(false);
            }
        });
    }, []);

    function toggleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    if (isSmallScreen) {
        return (
            <Context elevated={isElevated} hidden={isHidden}>

                <Logo width={45} />

                <MenuButtonWrapper onClick={toggleMenuOpen} {...menuButtonMotion}>
                    <MenuIcon />
                </MenuButtonWrapper>

                <Sidebar open={isMenuOpen} onLinkClick={toggleMenuOpen} onClose={toggleMenuOpen} />

            </Context>
        );
    }

    return (
        <Context elevated={isElevated} hidden={isHidden}>

            <Logo width={45} />

            <Links>

                <NavbarLink scrollLinkId="about" prefix="0.1" title="About" />

                <NavbarLink scrollLinkId="skills" prefix="0.2" title="Skills" />

                <NavbarLink scrollLinkId="interests" prefix="0.3" title="Interests" />

                <NavbarLink scrollLinkId="projects" prefix="0.4" title="Projects" />

            </Links>

        </Context>
    );
}


export default Navbar;
