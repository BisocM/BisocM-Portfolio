import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const NAV_ITEMS = ["Home", "Skills", "Achievements", "Experience"];

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#1a1c29]/90 backdrop-blur-sm flex items-center justify-between px-6 py-4 shadow-md animate-fadeIn">
            <div className="text-xl font-extrabold tracking-tight text-indigo-200 transform hover:scale-105 transition-transform border-b-2 border-transparent hover:border-indigo-400">
                Portfolio
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
                {NAV_ITEMS.map((section) => (
                    <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        className="text-gray-300 hover:text-indigo-400 transition-colors relative group"
                    >
                        {section}
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300" />
                    </a>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
                <button
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className="text-gray-300 hover:text-indigo-400 transition-colors focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* GitHub Link */}
            <div className="hidden md:flex items-center space-x-4">
                <a
                    href="https://github.com/BisocM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-indigo-400 transition-transform hover:rotate-12"
                    title="GitHub Profile"
                >
                    <FaGithub />
                </a>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <nav className="absolute top-full left-0 w-full bg-[#1a1c29] flex flex-col items-center py-4 md:hidden animate-slideDown">
                    {NAV_ITEMS.map((section) => (
                        <a
                            key={section}
                            href={`#${section.toLowerCase()}`}
                            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 relative group mb-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            {section}
                            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}