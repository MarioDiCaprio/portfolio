import React, {useEffect, useState} from "react";
import {AnimatePresence, useScroll, useVelocity} from "framer-motion";
import {AiOutlineMenu as MenuButtonClosedIcon} from "react-icons/ai";
import {IoClose as MenuButtonOpenIcon} from "react-icons/io5";
import {useSmallScreen} from "../../hooks/useScreen";
import {Context, Links, MenuButtonWrapper} from "./Navbar.styles";
import Sidebar from "../Sidebar/Sidebar";
import NavbarLink from "../NavbarLink/NavbarLink";
import {menuButtonMotion} from "./Navbar.motion";
import Logo from "../Logo/Logo";


const Navbar: React.FC = () => {
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

    const MenuButton: React.FC = () => (
        <AnimatePresence>
            {
                isMenuOpen ?
                    <MenuButtonWrapper onClick={toggleMenuOpen} {...menuButtonMotion}>
                        <MenuButtonOpenIcon />
                    </MenuButtonWrapper>
                    :
                    <MenuButtonWrapper onClick={toggleMenuOpen} {...menuButtonMotion}>
                        <MenuButtonClosedIcon />
                    </MenuButtonWrapper>
            }
        </AnimatePresence>
    );

    if (isSmallScreen) {
        return (
            <Context elevated={isElevated} hidden={isHidden}>

                <Logo width={37} />

                <MenuButton />

                <Sidebar open={isMenuOpen} onLinkClick={toggleMenuOpen} />

            </Context>
        );
    }

    return (
        <Context elevated={isElevated} hidden={isHidden}>

            <Logo width={37} />

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
