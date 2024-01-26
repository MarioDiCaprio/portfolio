import React from "react";
import LandingPage from "@/components/app/LandingPage";
import ThingsICanDo from "@/components/app/ThingsICanDo";
import About from "@/components/app/About";
import Projects from "@/components/app/Projects";
import Interests from "@/components/app/Interests";
import Contact from "@/components/app/Contact";
import Footer from "@/components/app/Footer";
import Technologies from "@/components/app/Technologies";

const Page: React.FC = () => (
    <>
        <LandingPage />
        <ThingsICanDo />
        <About />
        <Technologies />
        <Projects />
        <Interests />
        <Contact />
        <Footer />
    </>
)

export default Page