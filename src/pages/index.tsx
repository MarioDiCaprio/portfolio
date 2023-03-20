// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next';
import FrontCover from "../components/FrontCover/FrontCover";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Interests from "../components/Interests/Interests";
import Projects from "../components/Projects/Projects";
import Navbar from "../components/Navbar/Navbar";
import Credentials from "../components/Credentials/Credentials";


/**
 * This is the main page.
 */
const Index: NextPage = () => {
    return (
        <>

            <Navbar />

            <FrontCover />
            <About />
            <Skills />
            <Interests />
            <Projects />

            <Credentials />

        </>
    );
}

export default Index;
