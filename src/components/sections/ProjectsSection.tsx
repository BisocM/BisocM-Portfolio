import { motion, Variants } from "framer-motion";
import { IProject } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};
const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

interface ProjectsSectionProps {
    projects: IProject[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <motion.section
            id="projects"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="py-12 bg-white dark:bg-darkBg"
        >
            <div
                className="
          mb-8 text-2xl md:text-3xl font-bold text-center
          text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent
        "
            >
                Projects
            </div>

            <div className="relative max-w-5xl mx-auto px-4 md:px-8 py-4">
                {/* wrapper to allow vertical overflow */}
                <div className="relative overflow-visible">
                    <div className="overflow-x-auto snap-x snap-mandatory no-scrollbar py-8">
                        <motion.div
                            variants={container}
                            className="flex gap-6 items-stretch justify-start md:justify-center overflow-visible"
                        >
                            {projects.map((ach, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={item}
                                    className="overflow-visible"
                                >
                                    <ProjectCard {...ach} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Fade overlays */}
                <div
                    className="
            pointer-events-none
            absolute inset-y-0 left-0 w-8
            bg-gradient-to-r from-white to-transparent
            dark:from-darkBg
          "
                />
                <div
                    className="
            pointer-events-none
            absolute inset-y-0 right-0 w-8
            bg-gradient-to-l from-white to-transparent
            dark:from-darkBg
          "
                />
            </div>
        </motion.section>
    );
}