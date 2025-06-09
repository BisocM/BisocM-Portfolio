import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CompaniesSection from "@/components/sections/CompaniesSection";
import Footer from "@/components/layout/Footer";

import { projects } from "./data/projects";
import { experiences } from "./data/experience";

export default function App() {
    return (
        <div
            className="
                min-h-screen
                bg-white text-gray-900
                dark:bg-darkBg dark:text-gray-100
                font-sans overflow-x-hidden
            "
        >
            <Header />
            <main>
                <HeroSection />
                <SkillsSection />
                <ProjectsSection achievements={projects} />
                <CompaniesSection />
                <ExperienceSection experiences={experiences} />
            </main>
            <Footer />
        </div>
    );
}