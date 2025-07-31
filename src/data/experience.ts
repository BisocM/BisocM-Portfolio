export interface IExperience {
    title: string;
    company: string;
    startDate: string; // Format: YYYY-MM-DD
    endDate: string | null; // null indicates "Present"
    location: string;
    details: string[];
    softSkills?: string[];
    technicalSkills?: string[];
}

export const experiences: IExperience[] = [
    {
        title: "Software Developer and Prompt Engineer",
        company: "Brunel Talent Marketplace",
        startDate: "2025-01-01",
        endDate: "2025-03-31",
        location: "United Kingdom (Hybrid, Part-Time)",
        details: [
            "Oversaw the design of a customizable application using LLM agents to generate detailed test cases",
            "Implemented innovative solutions to streamline the test case generation process",
            "Collaborated with cross-functional teams to ensure high-quality standards",
            "Adopted SCRUM methodologies for agile project management",
        ],
        softSkills: ["Scrum", "Communication", "Leadership", "Collaboration"],
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
        title: "Full-Stack Developer",
        company: "Brunel Talent Marketplace",
        startDate: "2025-03-01",
        endDate: null,
        location: "United Kingdom (Hybrid, Part-Time)",
        details: [
            "Leading the transpilation efforts of a Java EE Legacy codebase from IAG Cargo",
            "Contributed in the development of an LLM approach to translation of legacy code"
        ],
        softSkills: ["Marketing", "Leadership", "Coordination", "Communication"],
        technicalSkills: ["Python", "Java", "GitHub Actions", "CI/CD", "Python Tooling", "DevOps", "DDD", "SQLAlchemy", "Flask"],
    },
];