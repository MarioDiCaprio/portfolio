"use client"

import React, {ReactNode} from "react";
import {NextUIProvider} from "@nextui-org/react";


const Providers: React.FC<{ children: ReactNode }> = ({ children }) => (
    <NextUIProvider>
        { children }
    </NextUIProvider>
)

export default Providers