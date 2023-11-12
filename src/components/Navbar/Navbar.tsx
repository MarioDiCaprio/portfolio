import React, {useState} from "react";
import {Content, Context, LinksSection, Logo} from "./Navbar.styles";
import NavLink from "../NavLink/NavLink";
import {useMediaQuery, useTheme} from "@mui/material";
import {HiOutlineMenuAlt3 as MenuIcon} from "react-icons/hi";
import {useMotionValueEvent, useScroll, useVelocity} from "framer-motion";


const Navbar: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(750));

    const {scrollY} = useScroll();
    const [variant, setVariant] = useState<'initial' | 'scrolled'>('initial');
    useMotionValueEvent(scrollY, 'change', val => {
        setVariant(val > 110? 'scrolled' : "initial");
    });

    const scrollVelocity = useVelocity(scrollY);
    const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
    useMotionValueEvent(scrollVelocity, 'change', val => {
        if (val > 0)
            setIsScrollingDown(true);
        else if (val < 0)
            setIsScrollingDown(false);
    });

    if (isSmallScreen) {
        return (
            <Context variant={variant} isScrollingDown={isScrollingDown}>
                <Content>
                    <Logo src="/logo.png" alt="Mario Di Caprio" />
                    <MenuIcon fontSize="2rem" />
                </Content>
            </Context>
        );
    }

    return (
        <Context variant={variant} isScrollingDown={isScrollingDown}>
            <Content>
                <Logo src="/logo.png" alt="Mario Di Caprio" />
                <LinksSection>
                    
                    <NavLink to="/">
                        Home
                    </NavLink>
                    
                </LinksSection>
            </Content>
        </Context>
    );
}

export default Navbar;