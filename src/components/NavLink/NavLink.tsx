import React, {ReactNode} from "react";
import {Context} from "./NavLink.styles";
import Link from "next/link";
import {useRouter} from "next/router";


interface NavLinkProps {
    to: string;
    children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
    const router = useRouter();
    
    return (
        <Link href={to}>
            <Context isActive={router.pathname === to}>
                { children }
            </Context>
        </Link>
    );
}

export default NavLink;