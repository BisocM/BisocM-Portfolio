import {useState} from 'react'
import {FaGithub} from 'react-icons/fa'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import {useTranslation} from 'react-i18next';

const NAV_KEYS = ['home', 'skills', 'projects', 'experience']

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const {t} = useTranslation();

    return (
        <header
            className="
                sticky top-0 z-50
                bg-white dark:bg-headerBg
                backdrop-blur-sm
                flex items-center justify-between
                px-6 py-4
                shadow-md
                border-b border-gray-200 dark:border-gray-800
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
                {t('common.portfolio')}
            </div>

            {}
            <nav className="hidden md:flex space-x-6">
                {NAV_KEYS.map((key) => (
                    <a
                        key={key}
                        href={`#${key}`}
                        className="
                            text-gray-900 dark:text-gray-300 hover:text-primary transition-colors duration-DEFAULT
                            relative group
                        "
                        aria-current={false}
                    >
                        {/* Translate navigation key */}
                        {t(`nav.${key}`)}
                        <span
                            className="
                                absolute left-0 bottom-[-2px] w-0 h-[2px] bg-primary
                                group-hover:w-full transition-all duration-DEFAULT
                            "
                        />
                    </a>
                ))}
            </nav>

            {}
            <div className="hidden md:flex items-center space-x-4">
                <ThemeToggle/>
                <a
                    href="https://github.com/BisocM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        text-xl text-gray-900 dark:text-gray-300
                        hover:text-primary transition-transform duration-DEFAULT
                        hover:rotate-12
                    "
                    title={t('nav.githubProfile')}
                >
                    <FaGithub/>
                </a>
                <LanguageSwitcher/>
            </div>

            {}
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
                <LanguageSwitcher/>
                <button
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className="text-gray-900 dark:text-gray-300 hover:text-primary transition-colors duration-DEFAULT focus:outline-none"
                    aria-label={t('nav.toggleMenu')}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        )}
                    </svg>
                </button>
            </div>

            {}
            {/* Mobile navigation drawer */}
            {isMenuOpen && (
                <nav
                    className="
                        absolute top-full left-0 w-full
                        bg-white dark:bg-darkBg
                        flex flex-col items-center py-4
                        animate-slideDown duration-DEFAULT
                        shadow-md
                    "
                >
                    {NAV_KEYS.map((key) => (
                        <a
                            key={key}
                            href={`#${key}`}
                            onClick={() => setMenuOpen(false)}
                            className="
                                text-gray-900 dark:text-gray-300 hover:text-primary transition-colors duration-DEFAULT
                                relative group mb-2
                            "
                            aria-current={false}
                        >
                            {t(`nav.${key}`)}
                            <span
                                className="
                                    absolute left-0 bottom-[-2px] w-0 h-[2px] bg-primary
                                    group-hover:w-full transition-all duration-DEFAULT
                                "
                            />
                        </a>
                    ))}
                    <div className="mt-4">
                        <ThemeToggle/>
                    </div>
                </nav>
            )}
        </header>
    )
}