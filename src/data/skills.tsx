import { ReactNode } from 'react';
import {
    SiDotnet,
    SiCplusplus,
    SiJavascript,
    SiDocker,
    SiGooglecloud,
    SiKubernetes,
    SiPostgresql,
    SiReact,
} from "react-icons/si";

export interface Skill {
    id: string;
    name: string;
    icon: ReactNode;
    level: 'Expert' | 'Advanced' | 'Proficient';
    levelColor: string;
    description?: string;
}

export const skills: Skill[] = [
            {
                id: 'csharp',
                name: 'C# / .NET',
                icon: <SiDotnet size={32} />,
                level: 'Expert',
                levelColor: 'text-green-400',
                description: 'With just shy of a decade of experience, I use C# and the .NET ecosystem to build robust, high-performance backend services, APIs, and cross-platform applications. My expertise includes native AOT compilation, deep Roslyn integration and IL-weaving.'
            },
            {
                id: 'cpp',
                    name: 'C/C++/ASM',
                icon: <SiCplusplus size={32} />,
                level: 'Advanced',
                    levelColor: 'text-sky-400',
                description: 'My proficiency in C, C++ and Assembly allows me to work close to the metal, developing performance-critical applications and tackling complex reverse engineering challenges. Such expertise becomes vital when working with various tools for low-level analysis like FRiDA, IDA and others.'
            },
            {
                id: 'docker',
                    name: 'Docker',
                icon: <SiDocker size={32} />,
                level: 'Advanced',
                    levelColor: 'text-sky-400',
                description: 'I leverage Docker for consistent development environments and streamlined deployments. My skills include creating optimized multi-stage Dockerfiles, managing containerized applications and docker registries.'
            },
            {
                id: 'kubernetes',
                    name: 'Kubernetes',
                icon: <SiKubernetes size={32} />,
                level: 'Advanced',
                    levelColor: 'text-sky-400',
                description: 'I use Kubernetes to orchestrate containerized applications at scale, ensuring high availability, fault tolerance, and efficient resource management in cloud environments, with over 200,000 concurrently serviced users in some of my applications.'
            },
            {
                id: 'postgresql',
                    name: 'PostgreSQL',
                icon: <SiPostgresql size={32} />,
                level: 'Advanced',
                    levelColor: 'text-sky-400',
                description: 'As my go-to relational database, I utilize PostgreSQL for its reliability, advanced features like JSONB, and extensibility. I design and optimize complex schemas for demanding applications.'
            },
            {
                id: 'javascript',
                    name: 'JavaScript / TS',
                icon: <SiJavascript size={32} />,
                level: 'Proficient',
                    levelColor: 'text-amber-400',
                description: 'I am proficient in modern JavaScript and TypeScript for building dynamic front-end interfaces and Node.js applications, focusing on clean, maintainable, and type-safe code.'
            },
            {
                id: 'react',
                    name: 'React',
                icon: <SiReact size={32} />,
                level: 'Proficient',
                    levelColor: 'text-amber-400',
                description: 'I build interactive and responsive user interfaces using React, employing hooks, state management solutions, and best practices to create seamless user experiences.'
            },
            {
                id: 'gcp',
                    name: 'Google Cloud',
                icon: <SiGooglecloud size={32} />,
                level: 'Proficient',
                    levelColor: 'text-amber-400',
                description: 'I have hands-on experience deploying and managing applications on Google Cloud Platform, utilizing services like GKE, Cloud Run, and Cloud SQL to build scalable infrastructure.'
            }
        ];

// We only want to auto-scroll through skills that have a description.
export const featuredSkills = skills.filter(skill => skill.description);