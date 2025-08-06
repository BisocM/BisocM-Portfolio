import {useTranslation} from 'react-i18next';
import {useEffect, useRef, useState} from 'react';
import {FiChevronDown, FiGlobe} from 'react-icons/fi';
import ReactCountryFlag from "react-country-flag";

const LANGUAGES = [
    {code: 'en', name: 'English', country_code: 'GB'},
    {code: 'ru', name: 'Русский', country_code: 'RU'},
];

export default function LanguageSwitcher() {
    const {i18n} = useTranslation();
    const [isOpen, setOpen] = useState(false);
    const switcherRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const currentLanguageCode = i18n.language.split('-')[0];
    const currentLanguage = LANGUAGES.find(lang => lang.code === currentLanguageCode) || LANGUAGES[0];

    return (
        <div className="relative" ref={switcherRef}>
            <button
                type="button"
                onClick={() => setOpen(!isOpen)}
                className="
                    inline-flex justify-center items-center w-full
                    font-medium text-gray-900 dark:text-gray-300
                    hover:text-primary transition-colors duration-DEFAULT
                    focus:outline-none
                "
                id="language-menu"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Select Language"
            >
                {/*
                 * THE FIX:
                 * Nudge the icon down by 1 pixel to achieve perfect horizontal alignment.
                 */}
                <FiGlobe size={20} className="relative top-px"/>
                <span className="ml-2">{currentLanguage.name}</span>
                <FiChevronDown
                    className={`ml-2 transition-transform duration-DEFAULT ${isOpen ? 'rotate-180' : ''}`}
                    size={16}
                />
            </button>

            <div
                className={`
                    origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg z-20
                    bg-white dark:bg-darkBgAlt border border-gray-200 dark:border-gray-700
                    transition-all duration-200 ease-out
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="language-menu"
            >
                <div className="py-1" role="none">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`
                                flex items-center gap-3 px-4 py-2 text-sm w-full text-left
                                ${currentLanguage.code === lang.code
                                ? 'bg-gray-100 dark:bg-gray-700 text-primary font-semibold'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'}
                            `}
                            role="menuitem"
                        >
                            <ReactCountryFlag
                                countryCode={lang.country_code}
                                svg
                                style={{width: '1.25em', height: '1.25em'}}
                            />
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}