import "@/css/globals.css"
import "@/css/indexStyles.css"
import "@/../public/fonts/barlow/barlow.css"

import React, { ReactNode } from "react";
import {Metadata} from "next";
import Providers from "@/components/Providers";
import Navbar from "@/components/app/Navbar";


export const metadata: Metadata = {
    title: "Mario Di Caprio",
    icons: ["/favicon.png"]
}

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => (
    <html lang="en">
        <head>
            <link rel="canonical" href="https://mariodicaprio.com"/>
        </head>
        <body className="font-barlow text-ebony-clay">
            <Providers>
                <Navbar />
                {children}
            </Providers>
        </body>
    </html>
)

export default Layout
