import {motion, Variants} from "framer-motion";
import {IProject} from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const container: Variants = {
    hidden: {},
    show: {
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
    return (
        <motion.section
            id="projects"
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.1}}
            variants={container}
            className="py-12 bg-white dark:bg-darkBg"
        >
            <div
                className="
          mb-12 text-2xl md:text-3xl font-bold text-center
          text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent
        "
            >
                Projects
            </div>
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className="flex"
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}