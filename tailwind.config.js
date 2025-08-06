/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // enable class-based dark mode
    theme: {
        extend: {
            // --- COLORS -------------------------------------------------------------
            colors: {
                // Primary accent, for buttons/links/highlights (cool blue)
                primary: '#0EA5E9',   // sky-blue
                primaryLight: '#38BDF8',   // hover state in light mode
                accent: '#14B8A6',   // teal accent

                // Deep dark backgrounds
                darkBg: '#121212',      // main page bg
                darkBgAlt: '#1F1F1F',      // section bg
                cardBg: '#1E1E1E',      // cards & panels

                // Header & footer specifics
                headerBg: 'rgba(18,18,18,0.9)', // sticky header backdrop
                footerBorder: '#272727',          // footer border/delimiter

                // --- TEXT SEMANTIC COLORS ----------------------------------------
                textPrimary: '#E5E5E5', // main body text
                textSecondary: '#A3A3A3', // secondary text e.g. captions, metadata
                textAccent: '#0EA5E9', // use sparingly for emphasis
            },

            // --- BREAKPOINTS ---------------------------------------------------------
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },

            // --- KEYFRAMES ------------------------------------------------------------
            keyframes: {
                fadeIn: {
                    '0%': {opacity: '0', transform: 'translateY(10px)'},
                    '100%': {opacity: '1', transform: 'translateY(0)'},
                },
                bounceIn: {
                    '0%': {transform: 'scale(0.9)', opacity: '0'},
                    '60%': {transform: 'scale(1.05)', opacity: '1'},
                    '80%': {transform: 'scale(0.95)'},
                    '100%': {transform: 'scale(1)'},
                },
                logoSpin: {
                    from: {transform: 'rotate(0deg)'},
                    to: {transform: 'rotate(360deg)'},
                },
            },

            // --- ANIMATIONS -----------------------------------------------------------
            animation: {
                fadeIn: 'fadeIn 1s ease forwards',
                bounceIn: 'bounceIn 0.8s forwards',
                logoSpin: 'logoSpin 20s linear infinite',
            },

            // --- TRANSITION DURATIONS -------------------------------------------------
            transitionDuration: {
                DEFAULT: '300ms',  // class: duration-DEFAULT
                fast: '200ms',  // class: duration-fast
                slow: '800ms',  // class: duration-slow
            },
        },
    },
    plugins: [],
}