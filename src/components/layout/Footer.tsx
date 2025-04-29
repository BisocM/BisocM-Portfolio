import { useState, useEffect } from "react";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
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
        <footer
            className="
        bg-darkBg py-6 text-center text-sm text-gray-500
        dark:bg-darkBgAlt dark:text-gray-400
        relative border-t border-footerBorder
        animate-fadeIn duration-DEFAULT
      "
        >
            <div className="mb-2">
                <a
                    href="mailto:bisocc.m@gmail.com"
                    className="
            hover:text-indigo-400 transition-colors duration-DEFAULT
            flex items-center justify-center gap-1
          "
                >
                    <FaEnvelope /> bisocc.m@gmail.com
                </a>
            </div>
            <div>&copy; {new Date().getFullYear()} BisocM. All rights reserved.</div>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="
            fixed bottom-6 right-6
            bg-primary text-white p-3 rounded-full shadow-lg
            transition-opacity duration-DEFAULT hover:opacity-80
          "
                    title="Back to Top"
                >
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
}