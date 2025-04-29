import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/layout/Footer";

import { projects } from "./data/projects";
import { experiences } from "./data/experience";

export default function App() {
    return (
        <div
            className="
        min-h-screen
        bg-darkBg text-gray-100 dark:bg-white dark:text-gray-900
        font-sans overflow-x-hidden
        animate-fadeIn duration-DEFAULT
      "
        >
            <Header />
            <main>
                <HeroSection />
                <SkillsSection />
                <ProjectsSection achievements={projects} />
                <ExperienceSection experiences={experiences} />
            </main>
            <Footer />
        </div>
    );
}