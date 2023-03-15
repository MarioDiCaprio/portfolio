import type { NextPage } from 'next';
import FrontCover from "../components/FrontCover/FrontCover";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Interests from "../components/Interests/Interests";
import Projects from "../components/Projects/Projects";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Credentials from "../components/Credentials/Credentials";


const Home: NextPage = () => {
    return (
        <div>

            {/* Appendix to document head */}
            <Head>
                <title>Mario Di Caprio</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar />

            <FrontCover />
            <About />
            <Skills />
            <Interests />
            <Projects />

            <Credentials />

        </div>
    );
}

export default Home;
