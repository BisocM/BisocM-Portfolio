import {useEffect, useState} from 'react'
import {FaMoon, FaSun} from 'react-icons/fa'
import {useTranslation} from 'react-i18next';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const {t} = useTranslation();

    useEffect(() => {
        const stored = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (stored === 'dark' || (!stored && prefersDark)) {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }, [])

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setTheme('light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        }
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label={t('theme.toggleDarkMode')}
            className="text-gray-900 dark:text-gray-300 hover:text-primary transition-colors duration-DEFAULT"
        >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
    )
}