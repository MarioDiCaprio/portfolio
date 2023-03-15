import React from "react";
import {AnimatePresence} from "framer-motion";
import {Mask, Root} from "./Sidebar.styles";
import {maskMotion, rootMotion} from "./Sidebar.motion";
import NavbarLink from "../NavbarLink/NavbarLink";


interface SidebarProps {
    open: boolean;
    onLinkClick?: () => void;
}


const Sidebar: React.FC<SidebarProps> = ({ open , onLinkClick }) => {
    return (
        <AnimatePresence>
            {open &&
                <Mask {...maskMotion}>
                    <Root {...rootMotion}>

                        <NavbarLink scrollLinkId="about" prefix="0.1" title="About" onLinkClick={onLinkClick} />

                        <NavbarLink scrollLinkId="skills" prefix="0.2" title="Skills" onLinkClick={onLinkClick} />

                        <NavbarLink scrollLinkId="interests" prefix="0.3" title="Interests" onLinkClick={onLinkClick} />

                        <NavbarLink scrollLinkId="projects" prefix="0.4" title="Projects" onLinkClick={onLinkClick} />

                    </Root>
                </Mask>
            }
        </AnimatePresence>
    );
}

export default Sidebar;