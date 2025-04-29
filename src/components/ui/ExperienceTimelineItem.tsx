import { IExperience } from "@/data/experience";
import { FaBriefcase } from "react-icons/fa";
import SkillPopover from "@/components/ui/SkillPopover";

interface ExperienceTimelineItemProps {
    experience: IExperience;
}

export default function ExperienceTimelineItem({ experience }: ExperienceTimelineItemProps) {
    const {softSkills = [], technicalSkills = []} = experience;

    return (
        <div className="
      relative pl-8 mb-8 group
      transition-transform duration-DEFAULT hover:scale-[1.01]
    ">
            {/* Timeline line & dot */}
            <div className="absolute left-2 top-0 h-full border-l border-gray-600"/>
            <div className="w-3 h-3 bg-purple-400 rounded-full absolute left-[4px] top-0"/>

            {/* Card */}
            <div className="bg-cardBg p-4 ml-3 rounded shadow transition-shadow duration-DEFAULT group-hover:shadow-xl">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
                            <FaBriefcase className="text-purple-400"/>
                            {experience.title}
                        </h3>
                        <p className="text-sm text-gray-300 italic">
                            {experience.company} | {experience.dateRange}
                        </p>
                        {experience.location && (
                            <p className="text-sm text-gray-300">
                                <strong>Location:</strong> {experience.location}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                        {softSkills.length > 0 && (
                            <SkillPopover title="Soft" small>
                                <div className="flex flex-wrap gap-1">
                                    {softSkills.map((skill, idx) => (
                                        <span key={idx}
                                              className="bg-darkBgAlt px-2 py-1 rounded text-gray-200 text-xs">
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </SkillPopover>
                        )}
                        {technicalSkills.length > 0 && (
                            <SkillPopover title="Tech" small>
                                <div className="flex flex-wrap gap-1">
                                    {technicalSkills.map((skill, idx) => (
                                        <span key={idx}
                                              className="bg-darkBgAlt px-2 py-1 rounded text-gray-200 text-xs">
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </SkillPopover>
                        )}
                    </div>
                </div>

                <ul className="text-sm leading-relaxed text-gray-200 mt-3 list-disc list-inside space-y-1">
                    {experience.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}