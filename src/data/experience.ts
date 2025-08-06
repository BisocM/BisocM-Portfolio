export interface IExperience {
    titleKey: string;
    company: string;
    startDate: string; // Format: YYYY-MM-DD
    endDate: string | null; // null indicates "Present"
    locationKey: string;
    detailsKeys: string[];
    softSkillsKeys?: string[];
    technicalSkills?: string[];
}

export const experiences: IExperience[] = [
    {
        titleKey: "experience.brunel1.title",
        company: "Brunel Talent Marketplace",
        startDate: "2025-01-01",
        endDate: "2025-03-31",
        locationKey: "experience.location.ukHybridPartTime",
        detailsKeys: [
            "experience.brunel1.details.0",
            "experience.brunel1.details.1",
            "experience.brunel1.details.2",
            "experience.brunel1.details.3",
        ],
        softSkillsKeys: ["skills.soft.scrum", "skills.soft.communication", "skills.soft.leadership", "skills.soft.collaboration"],
        technicalSkills: [
            "Software Infrastructure",
            "Software Design",
            "TypeScript",
            "React.js",
            "Python",
            "LangChain",
            "CSS",
            "React Native",
        ],
    },
    {
        titleKey: "experience.brunel2.title",
        company: "Brunel Talent Marketplace",
        startDate: "2025-03-01",
        endDate: null,
        locationKey: "experience.location.ukHybridPartTime",
        detailsKeys: [
            "experience.brunel2.details.0",
            "experience.brunel2.details.1"
        ],
        softSkillsKeys: ["skills.soft.marketing", "skills.soft.leadership", "skills.soft.coordination", "skills.soft.communication"],
        technicalSkills: ["Python", "Java", "GitHub Actions", "CI/CD", "Python Tooling", "DevOps", "DDD", "SQLAlchemy", "Flask"],
    },
];