import React, {ReactNode} from "react";
import {Context} from "./NavLink.styles";


interface NavLinkProps {
    children?: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children }) => {
    return (
        <Context>
            { children }
        </Context>
    );
}

export default NavLink;