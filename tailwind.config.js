/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', //enable class-based dark mode
  theme: {
    extend: {
      //COLORS
      colors: {
        primary: '#646cff',
        primaryLight: '#747bff',      //hover state in light mode
        accent: '#61dafb',            //React logo glow
        darkBg: '#1a1c29',            //main bg
        darkBgAlt: '#232442',         //sections bg
        cardBg: '#232442',            //cards & panels
        headerBg: 'rgba(26,28,41,0.9)',// sticky header backdrop
        footerBorder: '#2b2d42',
      },

      //BREAKPOINTS (you can leave defaults or customize)
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },

      //KEYFRAMES
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%':   { transform: 'scale(0.9)', opacity: '0' },
          '60%':  { transform: 'scale(1.05)', opacity: '1' },
          '80%':  { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        logoSpin: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },

      //ANIMATIONS
      animation: {
        fadeIn:    'fadeIn 1s ease forwards',
        bounceIn:  'bounceIn 0.8s forwards',
        logoSpin:  'logoSpin 20s linear infinite',
      },

      //TRANSITION DURATIONS
      transitionDuration: {
        DEFAULT: '300ms',  //class: "duration-DEFAULT"
        fast:    '200ms',  //class: duration-fast
        slow:    '800ms',  //class: duration-slow
      },
    },
  },
  plugins: [
  ],
}