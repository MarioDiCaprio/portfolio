import React from "react";
import {Content, Top} from "./Sidebar.styles";
import NavbarLink from "../NavbarLink/NavbarLink";
import {Drawer, IconButton} from "@mui/material";
import {MdClose as CloseIcon} from "react-icons/md";


interface SidebarProps {
    /**
     * Whether the sidebar is open.
     */
    open: boolean;
    /**
     * An event that is triggered when the links in the sidebar
     * are clicked.
     */
    onLinkClick?: () => void;
    onClose?: () => void;
}


/**
 * This is a sidebar that is used for small screens. It contains the links on the `Navbar`
 * that cannot be displayed there because of a small screen. Instead, they are rendered here.
 * The sidebar can be accessed via a button on the navbar that is visible on small screens.
 */
export const Sidebar: React.FC<SidebarProps> = ({ open , onLinkClick, onClose }) => {
    return (
        <Drawer open={open} anchor="right" onClose={onClose}>
            <Content>
                <Top>
                    <IconButton color="primary" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Top>

                <NavbarLink scrollLinkId="about" prefix="0.1" title="About" onLinkClick={onLinkClick} />

                <NavbarLink scrollLinkId="skills" prefix="0.2" title="Skills" onLinkClick={onLinkClick} />

                <NavbarLink scrollLinkId="interests" prefix="0.3" title="Interests" onLinkClick={onLinkClick} />

                <NavbarLink scrollLinkId="projects" prefix="0.4" title="Projects" onLinkClick={onLinkClick} />
            </Content>
        </Drawer>
    );
}

export default Sidebar;