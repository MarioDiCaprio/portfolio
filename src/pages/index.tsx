import type { NextPage } from 'next';
import LandingPage from "../sections/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";
import About from "../sections/About/About";
import {styled} from "@mui/material";
import Projects from "../sections/Projects/Projects";
import Interests from "../sections/Interests/Interests";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";


const Wrapper = styled('div')`
  max-width: 100%;
  overflow: hidden;
`;

const Index: NextPage = () => {
    return (
        <Wrapper>

            <Navbar />

            <LandingPage />
            <About />
            <Projects />
            <Interests />
            <Contact />
            <Footer />

        </Wrapper>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Index;
