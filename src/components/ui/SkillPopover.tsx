import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

interface SkillPopoverProps {
    title: string;
    children: React.ReactNode;
    small?: boolean;
}

export default function SkillPopover({ title, children, small }: SkillPopoverProps) {
    const [open, setOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={popoverRef}>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`
          flex items-center
          ${small ? "text-xs" : "text-sm"}
          text-primary hover:text-primaryLight
          focus:outline-none
          transition-colors duration-DEFAULT
        `}
                aria-expanded={open}
            >
                <span>{title}</span>
                <FiChevronDown
                    className={`ml-1 transform transition-transform duration-DEFAULT ${open ? "rotate-180" : ""}`}
                    size={small ? 12 : 16}
                />
            </button>
            <div
                className={`
          absolute right-0 mt-2 w-48 p-2
          bg-darkBgAlt border border-gray-700 rounded shadow-lg z-10
          transition-transform duration-DEFAULT origin-top-right
          ${open ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"}
        `}
                role="menu"
            >
                {children}
            </div>
        </div>
    );
}