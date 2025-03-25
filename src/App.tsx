import Header from "./components/major/Header.tsx";
import Hero from "./components/major/Hero.tsx";
import SkillsSection from "./components/skills/SkillsSection.tsx";
import ProjectsSection from "./components/projects/ProjectsSection.tsx";
import ExperienceSection from "./components/experience/ExperienceSection.tsx";
import Footer from "./components/major/Footer.tsx";

import { projects } from "./data/projects.ts";
import { experiences } from "./data/experience";

export default function App() {
    return (
        <div className="min-h-screen bg-[#1a1c29] text-gray-100 font-sans overflow-x-hidden animate-fadeIn">
            <Header />
            <main>
                <Hero />
                <SkillsSection />
                <ProjectsSection achievements={projects} />
                <ExperienceSection experiences={experiences} />
            </main>
            <Footer />
        </div>
    );
}