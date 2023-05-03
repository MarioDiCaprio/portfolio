import type { NextPage } from 'next';
import LandingPage from "../sections/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";


/**
 * This is the main page.
 */
const Index: NextPage = () => {
    return (
        <>

            <Navbar />
            <LandingPage />

        </>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Index;
