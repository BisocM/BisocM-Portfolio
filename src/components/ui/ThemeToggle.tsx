import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    //On mount: read stored preference or system setting
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
            aria-label="Toggle Dark Mode"
            className="text-gray-300 hover:text-primary transition-colors duration-DEFAULT"
        >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
    )
}