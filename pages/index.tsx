import styles from '../styles/Home.module.sass';
import type { NextPage } from 'next';
import FrontCover from "../components/_index/FrontCover/FrontCover";
import About from "../components/_index/About/About";
import Skills from "../components/_index/Skills/Skills";
import Interests from "../components/_index/Interests/Interests";
import Projects from "../components/_index/Projects/Projects";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import {useRouter} from "next/router";


const Home: NextPage = () => {
    const router = useRouter();

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

            <div className={styles.credentials}>
                Built by <span onClick={router.reload}>Mario Di Caprio</span>
            </div>

        </div>
    );
}

export default Home;
