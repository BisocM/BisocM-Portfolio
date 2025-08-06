import {ReactNode} from 'react';
import {
    SiCplusplus,
    SiDocker,
    SiDotnet,
    SiGooglecloud,
    SiJavascript,
    SiKubernetes,
    SiPostgresql,
    SiReact,
} from "react-icons/si";

type LevelKey = 'skills.level.expert' | 'skills.level.advanced' | 'skills.level.proficient';

export interface Skill {
    id: string;
    name: string;
    icon: ReactNode;
    levelKey: LevelKey;
    levelColor: string;
    descriptionKey?: string;
}

export const skills: Skill[] = [
    {
        id: 'csharp',
        name: 'C# / .NET',
        icon: <SiDotnet size={32}/>,
        levelKey: 'skills.level.expert',
        levelColor: 'text-green-400',
        descriptionKey: 'skills.csharp.description'
    },
    {
        id: 'cpp',
        name: 'C/C++/ASM',
        icon: <SiCplusplus size={32}/>,
        levelKey: 'skills.level.advanced',
        levelColor: 'text-sky-400',
        descriptionKey: 'skills.cpp.description'
    },
    {
        id: 'docker',
        name: 'Docker',
        icon: <SiDocker size={32}/>,
        levelKey: 'skills.level.advanced',
        levelColor: 'text-sky-400',
        descriptionKey: 'skills.docker.description'
    },
    {
        id: 'kubernetes',
        name: 'Kubernetes',
        icon: <SiKubernetes size={32}/>,
        levelKey: 'skills.level.advanced',
        levelColor: 'text-sky-400',
        descriptionKey: 'skills.kubernetes.description'
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        icon: <SiPostgresql size={32}/>,
        levelKey: 'skills.level.advanced',
        levelColor: 'text-sky-400',
        descriptionKey: 'skills.postgresql.description'
    },
    {
        id: 'javascript',
        name: 'JavaScript / TS',
        icon: <SiJavascript size={32}/>,
        levelKey: 'skills.level.proficient',
        levelColor: 'text-amber-400',
        descriptionKey: 'skills.javascript.description'
    },
    {
        id: 'react',
        name: 'React',
        icon: <SiReact size={32}/>,
        levelKey: 'skills.level.proficient',
        levelColor: 'text-amber-400',
        descriptionKey: 'skills.react.description'
    },
    {
        id: 'gcp',
        name: 'Google Cloud',
        icon: <SiGooglecloud size={32}/>,
        levelKey: 'skills.level.proficient',
        levelColor: 'text-amber-400',
        descriptionKey: 'skills.gcp.description'
    }
];

export const featuredSkills = skills.filter(skill => skill.descriptionKey);