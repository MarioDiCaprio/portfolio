import React, {useEffect, useState} from "react";
import {AnimatePresence, useScroll, useVelocity} from "framer-motion";
import {AiOutlineMenu as MenuButtonClosedIcon} from "react-icons/ai";
import {IoClose as MenuButtonOpenIcon} from "react-icons/io5";
import {useSmallScreen} from "../../hooks/useScreen";
import {Context, Links, LogoWrapper, MenuButtonWrapper} from "./Navbar.styles";
import Sidebar from "../Sidebar/Sidebar";
import NavbarLink from "../NavbarLink/NavbarLink";
import {logoMotion, menuButtonMotion} from "./Navbar.motion";


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

                <LogoWrapper {...logoMotion}>
                    <img src="/logo100.png" alt="logo" style={{ width: '100%', height: '100%' }} />
                </LogoWrapper>

                <MenuButton />

                <Sidebar open={isMenuOpen} onLinkClick={toggleMenuOpen} />

            </Context>
        );
    }

    return (
        <Context elevated={isElevated} hidden={isHidden}>

            <LogoWrapper {...logoMotion}>
                <img src="/logo50.png" alt="logo" style={{ width: '100%', height: '100%' }} />
            </LogoWrapper>

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
