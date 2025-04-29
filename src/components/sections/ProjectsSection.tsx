import { motion, Variants } from "framer-motion";
import { IProject } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

interface ProjectsSectionProps {
    achievements: IProject[];
}

export default function ProjectsSection({ achievements }: ProjectsSectionProps) {
    return (
        <motion.section
            id="achievements"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="py-12 px-4 md:px-8 bg-darkBg"
        >
            <div className="
        mb-8 text-2xl md:text-3xl font-bold text-center
        text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400
      ">
                Projects
            </div>
            <div className="relative overflow-x-auto py-4 snap-x snap-mandatory">
                <div className="
          absolute top-0 bottom-0 left-0 w-8
          bg-gradient-to-r from-darkBg to-transparent
          pointer-events-none
        " />
                <motion.div variants={container} className="flex gap-6 px-8 justify-center items-center">
                    {achievements.map((ach, idx) => (
                        <motion.div key={idx} variants={item}>
                            <ProjectCard {...ach} />
                        </motion.div>
                    ))}
                </motion.div>
                <div className="
          absolute top-0 bottom-0 right-0 w-8
          bg-gradient-to-l from-darkBg to-transparent
          pointer-events-none
        " />
            </div>
        </motion.section>
    );
}