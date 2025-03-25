export interface IExperience {
    title: string;
    company: string;
    dateRange: string;
    location: string;
    details: string[];
    softSkills?: string[];
    technicalSkills?: string[];
}

export const experiences: IExperience[] = [
    {
        title: "Software Developer and Prompt Engineer",
        company: "Brunel Talent Marketplace",
        dateRange: "Jan 2025 – Mar 2025 · 3 mos",
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
        title: "Full-Stack Developer & Digital Marketing Strategist",
        company: "Brunel Talent Marketplace",
        dateRange: "Mar 2025 – Present · 1 mo",
        location: "United Kingdom (Hybrid, Part-Time)",
        details: [
            "Leading ongoing marketing campaigns to boost digital presence",
            "Developing new features (frontend & backend) to enhance user engagement",
        ],
        softSkills: ["Marketing Strategy", "Brand Management", "Communication"],
        technicalSkills: ["TypeScript", "React.js", "Node.js", "AWS", "CI/CD Pipelines"],
    },
];