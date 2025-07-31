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
    {
        title: "ScrabbleSharp",
        description:
            "A React application with an ASP.NET backend. Built in a day, used for solving Scrabble puzzles.",
        link: "https://scrabble-sharp.bisocm.org",
        imgSrc: "https://imagedelivery.net/yMVZazkXH-qQOiCSpkNtBA/f9003943-c104-45c3-700f-c920227c1100/public",
        tags: [
            {
                name: "React",
                url: "https://reactjs.org/"
            },
            {
                name: "Tailwind",
                url: "https://tailwindcss.com/"
            },
            {
                name: "gRPC",
                url: "https://grpc.io/"
            },
            {
                name: "ASP.NET",
                url: "https://learn.microsoft.com/aspnet/core/"
            },
            {
                name: "Algorithms",
                url: "https://en.wikipedia.org/wiki/Algorithm"
            },
        ]
    },
    {
        title: "UnlimitedMages",
        description:
            "A simple BepInEx mod to increase the total permitted number of players in a Mage Arena lobby.",
        link: "https://github.com/BisocM/UnlimitedMages",
        imgSrc: "https://github.com/BisocM/UnlimitedMages/blob/master/icon.png?raw=true",
        tags: [
            {
                name: "C#",
                url: "https://learn.microsoft.com/dotnet/csharp/"
            },
            {
                name: "BepInEx",
                url: "https://docs.bepinex.dev/"
            },
            {
                name: "Harmony",
                url: "https://harmony.pardeike.net/"
            },
            {
                name: "Modding",
                url: "https://en.wikipedia.org/wiki/Mod_(video_games)"
            }
        ],
    }
];