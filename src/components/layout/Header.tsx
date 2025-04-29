import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const NAV_ITEMS = ["Home", "Skills", "Achievements", "Experience"];

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="
        sticky top-0 z-50
        bg-headerBg dark:bg-headerBg
        backdrop-blur-sm
        flex items-center justify-between
        px-6 py-4
        shadow-md
        animate-fadeIn duration-DEFAULT
      "
        >
            <div
                className="
          text-xl font-extrabold tracking-tight text-indigo-200
          transform hover:scale-105 transition-transform duration-DEFAULT
          border-b-2 border-transparent hover:border-primary
        "
            >
                Portfolio
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
                {NAV_ITEMS.map((section) => (
                    <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        className="
              text-gray-300 hover:text-primary transition-colors duration-DEFAULT
              relative group
            "
                    >
                        {section}
                        <span className="
              absolute left-0 bottom-[-2px] w-0 h-[2px] bg-primary
              group-hover:w-full transition-all duration-DEFAULT
            " />
                    </a>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className="text-gray-300 hover:text-primary transition-colors duration-DEFAULT focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* GitHub Link */}
            <div className="hidden md:flex items-center">
                <a
                    href="https://github.com/BisocM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            text-xl text-gray-300
            hover:text-primary transition-transform duration-DEFAULT
            hover:rotate-12
          "
                    title="GitHub Profile"
                >
                    <FaGithub />
                </a>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <nav
                    className="
            absolute top-full left-0 w-full
            bg-darkBg
            flex flex-col items-center py-4
            animate-slideDown duration-DEFAULT
          "
                >
                    {NAV_ITEMS.map((section) => (
                        <a
                            key={section}
                            href={`#${section.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="
                text-gray-300 hover:text-primary transition-colors duration-DEFAULT
                relative group mb-2
              "
                        >
                            {section}
                            <span className="
                absolute left-0 bottom-[-2px] w-0 h-[2px] bg-primary
                group-hover:w-full transition-all duration-DEFAULT
              " />
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}