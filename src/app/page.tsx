import HeroSection from "@/components/app/HeroSection";
import Projects from "@/components/app/Projects";
import WorkExperience from "@/components/app/WorkExperience";
import AboutMe from "@/components/app/AboutMe";


export default function Home() {
    return (
        <>
            <HeroSection />
            <Projects />
            <WorkExperience />
            <AboutMe />
        </>
    );
}
