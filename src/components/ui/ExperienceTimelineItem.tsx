import {IExperience} from "@/data/experience";
import {FaBriefcase} from "react-icons/fa";
import {formatExperienceDate} from "@/utils/dates";
import SkillPopover from "@/components/ui/SkillPopover";
import {useTranslation} from "react-i18next";

export interface ExperienceTimelineItemProps {
    experience: IExperience;

    isFirst?: boolean;

    isLast?: boolean;
}

export default function ExperienceTimelineItem({
                                                   experience,
                                                   isFirst = false,
                                                   isLast = false,
                                               }: ExperienceTimelineItemProps) {
    const {t, i18n} = useTranslation();
    const {softSkillsKeys = [], technicalSkills = []} = experience;


    // connector and dotY logic
    let connector = "";
    if (isFirst) {

        connector =
            "before:absolute before:left-3 before:top-6 before:bottom-0 before:w-px before:bg-gray-600 dark:before:bg-gray-400";
    } else if (isLast) {

        connector =
            "before:absolute before:left-3 before:top-0 before:bottom-1/2 before:w-px before:bg-gray-600 dark:before:bg-gray-400";
    } else {

        connector =
            "before:absolute before:left-3 before:top-0 before:bottom-0 before:w-px before:bg-gray-600 dark:before:bg-gray-400";
    }


    const dotY = isFirst
        ? "top-6"                     // flush with card top
        : isLast
            ? "top-1/2 -translate-y-1/2" // centred
            : "top-0";                   // default

    return (
        <div className={`relative pl-8 py-6 group ${connector}`}>
            {/* Dot visualization */}
            <div
                className={`
          absolute left-3 -translate-x-1/2 ${dotY}
          w-3 h-3 rounded-full z-10
          bg-purple-400 dark:bg-purple-500
        `}
            />

            {/* Card content */}
            <div
                className="bg-white dark:bg-cardBg p-4 ml-3 rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 transition transform-gpu duration-200 group-hover:scale-[1.01] group-hover:shadow-2xl">
                <div className="flex justify-between items-start">
                    {}
                    <div>
                        <h3 className="text-lg font-semibold text-accent flex items-center gap-2">
                            <FaBriefcase className="text-purple-400"/>
                            {t(experience.titleKey)}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                            {/* Pass t and locale to formatExperienceDate */}
                            {experience.company} | {formatExperienceDate(experience, t, i18n.language)}
                        </p>
                        {experience.locationKey && (
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>{t('common.location')}:</strong> {t(experience.locationKey)}
                            </p>
                        )}
                    </div>

                    {/* Skills Popovers */}
                    <div className="flex flex-col items-end space-y-1">
                        {softSkillsKeys.length > 0 && (
                            // Translate Popover title
                            <SkillPopover title={t('skills.soft.title')} small>
                                <div className="flex flex-wrap gap-1">
                                    {softSkillsKeys.map((sKey, i) => (
                                        <span
                                            key={i}
                                            className=" bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100 text-xs font-semibold px-2 py-1 rounded-full ">
                                            {t(sKey)}
                                        </span>
                                    ))}
                                </div>
                            </SkillPopover>
                        )}

                        {technicalSkills.length > 0 && (
                            // Translate Popover title
                            <SkillPopover title={t('skills.tech.title')} small>
                                <div className="flex flex-wrap gap-1">
                                    {/* Technical skills are not translated */}
                                    {technicalSkills.map((s, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-xs font-semibold px-2 py-1 rounded-full"> {s} </span>
                                    ))}
                                </div>
                            </SkillPopover>
                        )}
                    </div>
                </div>

                {/* Details list */}
                <ul className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 mt-3 list-disc list-inside space-y-1">
                    {experience.detailsKeys.map((dKey, i) => (
                        <li key={i}>{t(dKey)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}