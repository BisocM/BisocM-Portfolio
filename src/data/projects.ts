export interface ITag {
    name: string;
    url?: string;
}

export interface IProject {
    title: string;
    description: string;
    link: string;
    imgSrc: string;
    tags: ITag[];
}

export const projects: IProject[] = [
    {
        title: "CQRSharp",
        description:
            "An open-source, lightweight, and attribute-driven CQRS framework for .NET applications.",
        link: "https://github.com/BisocM/CQRSharp",
        imgSrc:
            "https://imagedelivery.net/yMVZazkXH-qQOiCSpkNtBA/eb96108a-3d9d-426a-f10e-cde5a420e300/public",
        tags: [
            {
                name: "C#",
                url: "https://learn.microsoft.com/dotnet/csharp/"
            },
            {
                name: "Native AOT",
                url: "https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/"
            },
            {
                name: "Roslyn",
                url: "https://github.com/dotnet/roslyn"
            },
            {
                name: "CQRS",
                url: "https://en.wikipedia.org/wiki/Command%E2%80%93query_separation"
            },
            {
                name: "AOP",
                url: "https://en.wikipedia.org/wiki/Aspect-oriented_programming"
            },
        ],
    },
    {
        title: "RykeShell",
        description:
            "A custom Unix shell built entirely in C++, offering users a powerful command-line experience.",
        link: "https://github.com/BisocM/RykeShell",
        imgSrc:
            "https://imagedelivery.net/yMVZazkXH-qQOiCSpkNtBA/2ee5b2a0-a876-4e04-e17a-c4daef7af800/public",
        tags: [
            {
                name: "C++",
                url: "https://en.cppreference.com/w/cpp"
            },
            {
                name: "CLI",
                url: "https://en.wikipedia.org/wiki/Command-line_interface"
            },
            {
                name: "CMake",
                url: "https://cmake.org/"
            },
            {
                name: "Unix-shell",
                url: "https://en.wikipedia.org/wiki/Unix_shell"
            },
        ],
    },
];