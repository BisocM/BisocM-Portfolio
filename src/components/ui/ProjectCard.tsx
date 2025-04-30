import { IProject } from "@/data/projects";

export default function ProjectCard({ title, description, link, imgSrc }: IProject) {
    return (
        <div className="
            group relative min-w-[250px] max-w-xs
            bg-white dark:bg-cardBg rounded-lg shadow-md overflow-hidden
            transform transition-all duration-DEFAULT
            hover:scale-105 hover:-translate-y-2 hover:shadow-xl
            cursor-pointer border border-transparent hover:border-primary
            snap-center
        ">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-DEFAULT pointer-events-none" />
            <div className="relative z-10">
                <div className="relative h-40 overflow-hidden">
                    <img
                        src={imgSrc}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-DEFAULT ease-in-out group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-30 transition-opacity duration-DEFAULT" />
                </div>
                <div className="p-4 flex flex-col justify-between">
                    <div>
                        <h3 className="
                            text-lg font-semibold text-purple-300 mb-2
                            group-hover:text-indigo-300 transition-colors duration-DEFAULT
                        ">
                            {title}
                        </h3>
                        <p className="
                            text-sm text-gray-700 dark:text-gray-200 mb-3
                            group-hover:translate-x-1 transition-all duration-DEFAULT
                        ">
                            {description}
                        </p>
                    </div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-sm text-primary hover:underline
                            group-hover:text-indigo-200 transition-colors duration-DEFAULT
                        "
                    >
                        View More
                    </a>
                </div>
            </div>
        </div>
    );
}