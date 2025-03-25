import { IProject } from "../../data/projects.ts";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll.ts";

interface IAchievementCardProps extends IProject {}

function ProjectCard({ title, description, link, imgSrc }: IAchievementCardProps) {
    return (
        <div className="group relative min-w-[250px] max-w-xs bg-[#232442] rounded-lg shadow-md flex-shrink-0 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl cursor-pointer border border-transparent hover:border-indigo-400 snap-center">
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                {/* Content */}
                <div className="p-4 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-purple-300 mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-200 mb-3 group-hover:translate-x-1 transition-all duration-300">
                            {description}
                        </p>
                    </div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-400 hover:underline group-hover:text-indigo-200 transition-colors duration-300"
                    >
                        View More
                    </a>
                </div>
            </div>
        </div>
    );
}

interface AchievementsSectionProps {
    achievements: IProject[];
}

export default function ProjectsSection({ achievements }: AchievementsSectionProps) {
    const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

    return (
        <section
            id="achievements"
            ref={fadeInRef}
            className="py-12 px-4 md:px-8 bg-[#1a1c29]
                 opacity-0 translate-y-6 transition-all duration-700"
        >
            <div className="mb-8 text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Projects
            </div>
            <div className="relative overflow-x-auto py-4 snap-x snap-mandatory">
                {/* Fading gradient on each side for horizontal scroll */}
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#1a1c29] to-transparent pointer-events-none" />
                <div className="flex gap-6 px-8 justify-center items-center">
                    {achievements.map((ach, index) => (
                        <ProjectCard
                            key={index}
                            title={ach.title}
                            description={ach.description}
                            link={ach.link}
                            imgSrc={ach.imgSrc}
                        />
                    ))}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#1a1c29] to-transparent pointer-events-none" />
            </div>
        </section>
    );
}