import { FaArrowUp, FaGithub, FaCogs, FaServer, FaEnvelope } from "react-icons/fa";
import { SiPostgresql, SiFramework, SiGooglecloud, SiDotnet, SiCplusplus, SiJavascript, SiDocker, SiKubernetes } from "react-icons/si";
import { useState, useEffect } from "react";

/* ---------------------- Header with Navigation ---------------------- */
function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#1a1c29]/90 backdrop-blur-sm flex items-center justify-between px-6 py-4 shadow-md transition-all duration-300">
            <div className="text-xl font-extrabold tracking-tight text-indigo-200 transform hover:scale-105 transition-transform duration-300">
                Portfolio
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
                {["Home", "Skills", "Achievements", "Experience"].map((section) => (
                    <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        className="text-gray-300 hover:text-indigo-400 transition-colors relative group"
                    >
                        {section}
                        {/* Underline Animation */}
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300" />
                    </a>
                ))}
            </nav>
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className="text-gray-300 hover:text-indigo-400 transition-colors focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <a
                    href="https://github.com/BisocM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-indigo-400 transition-transform transform hover:rotate-12"
                    title="GitHub Profile"
                >
                    <FaGithub />
                </a>
            </div>
            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <nav className="absolute top-full left-0 w-full bg-[#1a1c29] flex flex-col items-center py-4 md:hidden animate-slideDown">
                    {["Home", "Skills", "Achievements", "Experience"].map((section) => (
                        <a
                            key={section}
                            href={`#${section.toLowerCase()}`}
                            className="text-gray-300 hover:text-indigo-400 transition-colors py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            {section}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}

/* ---------------------- Hero / Intro Section ---------------------- */
function Hero() {
    return (
        <section
            id="home"
            className="relative flex flex-col items-center text-center bg-gradient-to-r from-[#2b2d42] via-[#1a1c29] to-[#232442] py-16 px-4 animate-fadeIn"
        >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-slideDown">
                BisocM
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 animate-fadeIn delay-200">
                Backend Developer • Embedded Systems • Reverse Engineering
            </p>
        </section>
    );
}

/* ---------------------- Language Proficiency Bar ---------------------- */
interface LanguageBarProps {
    language: string;
    level: string;
    percentage: number;
}

function LanguageBar({ language, level, percentage }: LanguageBarProps) {
    return (
        <div className="space-y-1">
            <div className="flex items-center justify-between">
                <span>{language}</span>
                <span className="text-gray-400">{level}</span>
            </div>
            <div className="bg-gray-700 h-2 rounded overflow-hidden">
                <div className="bg-indigo-500 h-full" style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
}

/* ---------------------- Achievement Card ---------------------- */
interface AchievementCardProps {
    title: string;
    description: string;
    link: string;
    imgSrc: string;
}

function AchievementCard({ title, description, link, imgSrc }: AchievementCardProps) {
    return (
        <div className="group relative min-w-[250px] max-w-xs bg-[#232442] rounded-lg shadow-md flex-shrink-0 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            {/* Animated Background Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

            {/* Card Content with a higher stacking context */}
            <div className="relative z-10">
                {/* Image Container with Enhanced Transformations */}
                <div className="relative h-40 overflow-hidden">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="h-full w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1"
                    />
                    {/* Overlay with subtle gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>

                {/* Card Details */}
                <div className="p-4 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-purple-300 mb-2 transition-colors duration-300 group-hover:text-indigo-300">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-200 mb-3 transition-all duration-300 group-hover:text-gray-100 group-hover:translate-x-1">
                            {description}
                        </p>
                    </div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-400 transition-colors duration-300 group-hover:text-indigo-200 hover:underline"
                    >
                        View More
                    </a>
                </div>
            </div>
        </div>
    );
}

/* ---------------------- Experience Timeline Item ---------------------- */
interface ExperienceProps {
    title: string;
    company: string;
    dateRange: string;
    details: string;
}

function ExperienceTimeline({ title, company, dateRange, details }: ExperienceProps) {
    return (
        <div className="relative pl-8 animate-slideUp">
            {/* Vertical line and dot */}
            <div className="absolute left-2 top-0 h-full border-l border-gray-600" />
            <div className="w-3 h-3 bg-purple-400 rounded-full absolute left-[4px] top-0" />
            <div className="bg-[#1a1c29] p-4 ml-3 rounded shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-purple-300 mb-1">{title}</h3>
                <p className="text-sm text-gray-400 italic mb-1">
                    {company} | {dateRange}
                </p>
                <p className="text-sm leading-relaxed text-gray-200">{details}</p>
            </div>
        </div>
    );
}

/* ---------------------- Skills Section ---------------------- */
function SkillsSection() {
    return (
        <section id="skills" className="py-12 px-4 md:px-8 bg-[#232442] animate-slideUp">
            <div className="mb-8 text-2xl md:text-3xl font-bold text-indigo-200 text-center">
                Skills &amp; Proficiency
            </div>
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                {/* Core Development Stack */}
                <div className="bg-[#1a1c29] rounded-lg p-6 flex-1 shadow-md">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <FaCogs /> Core Development Stack
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiDotnet className="text-indigo-400" /> <span>C# (Expert)</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiCplusplus className="text-indigo-400" /> <span>C/C++/ASM</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiJavascript className="text-indigo-400" /> <span>JS/TS/React.js</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <FaServer className="text-indigo-400" /> <span>Backend &amp; Embedded</span>
                        </div>
                    </div>
                </div>
                {/* Cloud & Networking */}
                <div className="bg-[#1a1c29] rounded-lg p-6 flex-1 shadow-md">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <SiDocker /> Cloud &amp; Networking
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiFramework className="text-indigo-400" /> <span>NAT, VPLAN, AiMesh</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-2">
                            <SiGooglecloud className="text-indigo-400" /> <span>Google Cloud, AWS</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-1">
                            <SiKubernetes className="text-indigo-400" />
                            <span>K8 &amp; Docker</span>
                        </div>
                        <div className="bg-[#232442] px-3 py-1 rounded flex items-center gap-1">
                            <SiPostgresql className="text-indigo-400" />
                            <span>PostgreSQL, MySQL, MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Language Proficiency */}
            <div className="mt-10 bg-[#1a1c29] p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-purple-300 mb-4 text-center">
                    Language Proficiency
                </h3>
                <div className="space-y-4 text-sm">
                    <LanguageBar language="English" level="Full Professional" percentage={95} />
                    <LanguageBar language="Russian" level="Native/Bilingual" percentage={100} />
                    <LanguageBar language="Georgian" level="Limited Working" percentage={50} />
                    <LanguageBar language="German" level="Elementary" percentage={30} />
                </div>
            </div>
        </section>
    );
}

/* ---------------------- Achievements Section ---------------------- */
function AchievementsSection() {
    return (
        <section id="achievements" className="py-12 px-4 md:px-8 bg-[#1a1c29]">
            <div className="mb-8 text-2xl md:text-3xl font-bold text-indigo-200 text-center">
                Achievements
            </div>
            <div className="overflow-x-auto py-4">
                <div className="flex gap-6 justify-center">
                    <AchievementCard
                        title="CQRSharp"
                        description="An open-source, lightweight, and attribute-driven CQRS framework for .NET applications."
                        link="https://github.com/BisocM/CQRSharp"
                        imgSrc="https://github.com/BisocM/CQRSharp/blob/Release/CQRSharp_Icon_Rectangle.png?raw=true"
                    />
                    <AchievementCard
                        title="RykeShell"
                        description="A custom Unix shell built entirely in C++, offering users a powerful command-line experience."
                        link="https://github.com/BisocM/RykeShell"
                        imgSrc="https://github.com/BisocM/RykeShell/blob/master/RykeShell_Rectangle.png?raw=true"
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------------- Experience Section ---------------------- */
function ExperienceSection() {
    return (
        <section id="experience" className="py-12 px-4 md:px-8 bg-[#232442]">
            <div className="mb-8 text-2xl md:text-3xl font-bold text-indigo-200 text-center">
                Experience
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
                <ExperienceTimeline
                    title="Software Developer/Prompt Engineer"
                    company="Brunel Talent Marketplace"
                    dateRange="Jan. 2025 - Present"
                    details="Worked on a project to improve test case generation for business scenarios."
                />
            </div>
        </section>
    );
}

/* ---------------------- Footer ---------------------- */
function Footer() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="bg-[#1a1c29] py-6 text-center text-sm text-gray-500 relative">
            <div className="mb-2">
                <a
                    href="mailto:bisocc.m@gmail.com"
                    className="hover:text-indigo-400 transition-colors flex items-center justify-center gap-1"
                >
                    <FaEnvelope /> bisocc.m@gmail.com
                </a>
            </div>
            <div>&copy; {new Date().getFullYear()} BisocM. All rights reserved.</div>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-indigo-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:opacity-80"
                    title="Back to Top"
                >
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
}

/* ---------------------- Main App ---------------------- */
function App() {
    return (
        <div className="min-h-screen bg-[#1a1c29] text-gray-100 font-sans overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <SkillsSection />
                <AchievementsSection />
                <ExperienceSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;