import {useRef} from "react";
import {motion, Variants} from "framer-motion";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {IProject} from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import {useTranslation} from "react-i18next";

const container: Variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item: Variants = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 100}},
};

interface ProjectsSectionProps {
    projects: IProject[];
}

export default function ProjectsSection({projects}: ProjectsSectionProps) {
    const {t} = useTranslation();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const card = scrollContainerRef.current.querySelector(':scope > div');
            if (card) {
                // Scroll by the width of one card plus the gap (space-x-8 -> 2rem -> 32px)
                const scrollAmount = card.clientWidth + 32;
                scrollContainerRef.current.scrollBy({
                    left: direction === "left" ? -scrollAmount : scrollAmount,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <motion.section
            id="projects"
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.1}}
            variants={container}
            className="py-12 bg-white dark:bg-darkBg"
        >
            <h2
                className="
                    mb-12 text-2xl md:text-3xl font-bold text-center
                    text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent
                "
            >
                {t('projectsSection.title')}
            </h2>

            <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8">
                {/* Carousel Buttons */}
                <button
                    onClick={() => scroll("left")}
                    aria-label={t('common.previous')}
                    className="
                        absolute left-2 top-1/2 -translate-y-1/2 transform
                        bg-white/60 dark:bg-darkBg/60 hover:bg-white dark:hover:bg-darkBg
                        rounded-full p-3 shadow-lg transition-all z-20
                        text-gray-900 dark:text-gray-100
                        hidden md:block
                        disabled:opacity-50 disabled:cursor-not-allowed
                    "
                >
                    <FaArrowLeft size={16}/>
                </button>

                <div
                    ref={scrollContainerRef}
                    className="
                        flex overflow-x-auto snap-x snap-mandatory scroll-smooth
                        pb-8 space-x-8 no-scrollbar
                        -mx-2 px-6 md:mx-0 md:px-12
                    "
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="flex-shrink-0 snap-center"
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    aria-label={t('common.next')}
                    className="
                        absolute right-2 top-1/2 -translate-y-1/2 transform
                        bg-white/60 dark:bg-darkBg/60 hover:bg-white dark:hover:bg-darkBg
                        rounded-full p-3 shadow-lg transition-all z-20
                        text-gray-900 dark:text-gray-100
                        hidden md:block
                        disabled:opacity-50 disabled:cursor-not-allowed
                    "
                >
                    <FaArrowRight size={16}/>
                </button>
            </div>
        </motion.section>
    );
}