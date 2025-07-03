import { IExperience } from "@/data/experience";
import { FaBriefcase } from "react-icons/fa";
import SkillPopover from "@/components/ui/SkillPopover";

export interface ExperienceTimelineItemProps {
    experience: IExperience;
    /** most-recent entry (top of the list) */
    isFirst?: boolean;
    /** earliest entry (bottom of the list) */
    isLast?: boolean;
}

export default function ExperienceTimelineItem({
                                                   experience,
                                                   isFirst = false,
                                                   isLast = false,
                                               }: ExperienceTimelineItemProps) {
    const { softSkills = [], technicalSkills = [] } = experience;

    /* ---------------- vertical connector ---------------- */
    let connector = "";
    if (isFirst) {
        /* start exactly at the dot’s top (1.5 rem) and run down */
        connector =
            "before:absolute before:left-3 before:top-6 before:bottom-0 before:w-px before:bg-gray-600 dark:before:bg-gray-400";
    } else if (isLast) {
        /* run from card top to the dot’s centre */
        connector =
            "before:absolute before:left-3 before:top-0 before:bottom-1/2 before:w-px before:bg-gray-600 dark:before:bg-gray-400";
    } else {
        /* middle cards: full height */
        connector =
            "before:absolute before:left-3 before:top-0 before:bottom-0 before:w-px before:bg-gray-600 dark:before:bg-gray-400";
    }

    /* ---------------- dot placement -------------------- */
    const dotY = isFirst
        ? "top-6"                     // flush with card top
        : isLast
            ? "top-1/2 -translate-y-1/2" // centred
            : "top-0";                   // default

    return (
        <div className={`relative pl-8 py-6 group ${connector}`}>
            {/* timeline dot, horizontally centred on the line */}
            <div
                className={`
          absolute left-3 -translate-x-1/2 ${dotY}
          w-3 h-3 rounded-full z-10
          bg-purple-400 dark:bg-purple-500
        `}
            />

            {/* card body (scales on hover only) */}
            <div
                className="
          bg-white dark:bg-cardBg p-4 ml-3
          rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-gray-700
          transition transform-gpu duration-200
          group-hover:scale-[1.01] group-hover:shadow-2xl
        "
            >
                <div className="flex justify-between items-start">
                    {/* heading */}
                    <div>
                        <h3 className="text-lg font-semibold text-accent flex items-center gap-2">
                            <FaBriefcase className="text-purple-400" />
                            {experience.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                            {experience.company} | {experience.dateRange}
                        </p>
                        {experience.location && (
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>Location:</strong> {experience.location}
                            </p>
                        )}
                    </div>

                    {/* skill chips */}
                    <div className="flex flex-col items-end space-y-1">
                        {softSkills.length > 0 && (
                            <SkillPopover title="Soft" small>
                                <div className="flex flex-wrap gap-1">
                                    {softSkills.map((s, i) => (
                                        <span
                                            key={i}
                                            className="
                        bg-purple-200 dark:bg-purple-800
                        text-purple-900 dark:text-purple-100
                        text-xs font-semibold px-2 py-1 rounded-full
                      "
                                        >
                      {s}
                    </span>
                                    ))}
                                </div>
                            </SkillPopover>
                        )}

                        {technicalSkills.length > 0 && (
                            <SkillPopover title="Tech" small>
                                <div className="flex flex-wrap gap-1">
                                    {technicalSkills.map((s, i) => (
                                        <span
                                            key={i}
                                            className="
                        bg-gray-300 dark:bg-gray-700
                        text-gray-900 dark:text-gray-100
                        text-xs font-semibold px-2 py-1 rounded-full
                      "
                                        >
                      {s}
                    </span>
                                    ))}
                                </div>
                            </SkillPopover>
                        )}
                    </div>
                </div>

                {/* bullet list */}
                <ul className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 mt-3 list-disc list-inside space-y-1">
                    {experience.details.map((d, i) => (
                        <li key={i}>{d}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}