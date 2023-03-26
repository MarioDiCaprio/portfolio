// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next';
import {useState} from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Interests from "../components/Interests/Interests";
import Projects from "../components/Projects/Projects";
import Navbar from "../components/Navbar/Navbar";
import Credentials from "../components/Credentials/Credentials";
import BootScreen from "../components/BootScreen/BootScreen";


/**
 * This is the main page.
 */
const Index: NextPage = () => {
    const [hasBooted, setHasBooted] = useState<boolean>(false);

    function completeBoot() {
        setHasBooted(true);
    }

    if (!hasBooted) {
        return (
            <BootScreen onAnimationComplete={completeBoot} />
        );
    }

    return (
        <>

            <Navbar />

            <LandingPage />
            <About />
            <Skills />
            <Interests />
            <Projects />

            <Credentials />

        </>
    );
}

export default Index;
