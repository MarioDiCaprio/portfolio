import React from "react";
import LandingPage from "@/components/app/LandingPage";
import ThingsICanDo from "@/components/app/ThingsICanDo";
import About from "@/components/app/About";
import Projects from "@/components/app/Projects";
import Interests from "@/components/app/Interests";
import Contact from "@/components/app/Contact";
import Footer from "@/components/app/Footer";

const Page: React.FC = () => (
    <>
        <LandingPage />
        <ThingsICanDo />
        <About />
        <Projects />
        <Interests />
        <Contact />
        <Footer />
    </>
)

export default Page