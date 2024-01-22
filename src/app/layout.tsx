import "@/css/globals.css"
import "@/css/indexStyles.css"
import "@/css/fonts/barlow.css"

import React, { ReactNode } from "react";
import {Metadata} from "next";
import Providers from "@/components/Providers";


export const metadata: Metadata = {
    title: "Mario Di Caprio",
    icons: ["/favicon.png"]
}

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => (
    <html lang="en">
        <body className="font-barlow text-ebony-clay">
            <Providers>
                {children}
            </Providers>
        </body>
    </html>
)

export default Layout
