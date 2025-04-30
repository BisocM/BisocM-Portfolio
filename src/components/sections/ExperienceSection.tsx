import { motion, Variants } from "framer-motion";
import { IExperience } from "@/data/experience";
import ExperienceTimelineItem from "@/components/ui/ExperienceTimelineItem";

interface ExperienceSectionProps {
    experiences: IExperience[];
}

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    return (
        <motion.section
            id="experience"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="py-12 px-4 md:px-8 bg-white dark:bg-darkBgAlt"
        >
            <div className="
                mb-2 text-2xl md:text-3xl font-bold text-center
                text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400
            ">
                Professional Experience
            </div>
            <p className="text-center text-sm text-gray-400 mb-8">
                A snapshot of my recent roles and achievements
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
                {experiences.map((exp, index) => (
                    <motion.div key={index} variants={item}>
                        <ExperienceTimelineItem experience={exp} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}