export interface IProject {
    title: string;
    description: string;
    link: string;
    imgSrc: string;
}

export const projects: IProject[] = [
    {
        title: "CQRSharp",
        description:
            "An open-source, lightweight, and attribute-driven CQRS framework for .NET applications.",
        link: "https://github.com/BisocM/CQRSharp",
        imgSrc:
            "https://imagedelivery.net/yMVZazkXH-qQOiCSpkNtBA/eb96108a-3d9d-426a-f10e-cde5a420e300/public",
    },
    {
        title: "RykeShell",
        description:
            "A custom Unix shell built entirely in C++, offering users a powerful command-line experience.",
        link: "https://github.com/BisocM/RykeShell",
        imgSrc:
            "https://imagedelivery.net/yMVZazkXH-qQOiCSpkNtBA/2ee5b2a0-a876-4e04-e17a-c4daef7af800/public",
    },
];