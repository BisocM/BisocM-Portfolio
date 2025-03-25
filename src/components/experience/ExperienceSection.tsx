import { IExperience } from "../../data/experience.ts";
import ExperienceTimelineItem from "./ExperienceTimelineItem.tsx";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll.ts";

interface ExperienceSectionProps {
    experiences: IExperience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

    return (
        <section
            id="experience"
            ref={fadeInRef}
            className="py-12 px-4 md:px-8 bg-[#232442]
                 opacity-0 translate-y-6 transition-all duration-700"
        >
            <div className="mb-2 text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Professional Experience
            </div>
            <p className="text-center text-sm text-gray-400 mb-8">
                A snapshot of my recent roles and achievements
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
                {experiences.map((exp, index) => (
                    <ExperienceTimelineItem key={index} experience={exp} />
                ))}
            </div>
        </section>
    );
}