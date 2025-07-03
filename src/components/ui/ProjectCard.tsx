import { IProject, ITag } from "@/data/projects";

export default function ProjectCard({
                                        title,
                                        description,
                                        link,
                                        imgSrc,
                                        tags,
                                    }: IProject) {
    const handleTagClick = (tag: ITag) => {
        // If tag.url is provided, use it; otherwise fallback to a Wikipedia lookup
        const slug = tag.name.replace(/\s+/g, "_");
        const destination = tag.url ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(slug)}`;
        window.open(destination, "_blank");
    };

    return (
        <div
            className="
                group relative min-w-[250px] max-w-xs
                bg-white dark:bg-cardBg text-textPrimary
                rounded-lg shadow-md overflow-visible
                transform transition-all duration-DEFAULT
                flex flex-col h-full
                hover:scale-105 hover:-translate-y-2 hover:shadow-xl
                cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-primary
                snap-center
            "
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-DEFAULT pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
                <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <img
                        src={imgSrc}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-DEFAULT ease-in-out group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-30 transition-opacity duration-DEFAULT" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h3
                            className="
                text-lg font-semibold text-accent mb-2
                group-hover:text-indigo-300 transition-colors duration-DEFAULT
              "
                        >
                            {title}
                        </h3>
                        <p
                            className="
                text-sm text-gray-700 dark:text-gray-200 mb-3
                group-hover:translate-x-1 transition-all duration-DEFAULT
              "
                        >
                            {description}
                        </p>

                        {/* Clickable tag buttons */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag) => (
                                <button
                                    key={tag.name}
                                    type="button"
                                    onClick={() => handleTagClick(tag)}
                                    className="
                                    text-xs font-semibold
                                    bg-indigo-100 text-indigo-800
                                    dark:bg-indigo-800 dark:text-indigo-200
                                    px-2 py-1 rounded-full
                                    hover:bg-indigo-200 dark:hover:bg-indigo-700
                                    transition-colors duration-DEFAULT
                                  "
                                >
                                    {tag.name}
                                </button>
                            ))}
                        </div>
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