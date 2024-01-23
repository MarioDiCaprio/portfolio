import React from "react";
import Link from "next/link";
import {Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";


const Navbar: React.FC = () => (
    <NextNavbar className="fixed bg-ebony-clay text-white shadow-xl">
        <NavbarBrand>
            <img src="/logo/logo.png" alt="Mario Di Caprio" className="w-[50px] h-[50px]"/>
        </NavbarBrand>
        <NavbarContent>
            
            <NavbarItem>
                <Link href="/" className="underlined-link">
                    Home
                </Link>
            </NavbarItem>
            
        </NavbarContent>
    </NextNavbar>
)

export default Navbar