import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiFramer,
    SiHtml5,
    SiCss3,
    SiSharp,
    SiCplusplus,
    SiPython,
    SiDotnet,
    SiMongodb,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiLinux,
    SiVercel,
} from 'react-icons/si';

type Skill = {
    name: string;
    icon: React.ReactNode;
    level: 'Proficient' | 'Experienced' | 'Familiar';
};

export const frontendSkills: Skill[] = [
    { name: 'TypeScript', icon: <SiTypescript size={48} />, level: 'Experienced' },
    { name: 'React (Native)', icon: <SiReact size={48} />, level: 'Experienced' },
    { name: 'JavaScript', icon: <SiJavascript size={48} />, level: 'Familiar' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} />, level: 'Familiar' },
    { name: 'HTML5', icon: <SiHtml5 size={48} />, level: 'Familiar' },
    { name: 'CSS3', icon: <SiCss3 size={48} />, level: 'Familiar' },
    { name: 'Framer Motion', icon: <SiFramer size={48} />, level: 'Familiar' },
];

export const backendSkills: Skill[] = [
    { name: 'C#', icon: <SiSharp size={48} />, level: 'Proficient' },
    { name: '.NET / EF', icon: <SiDotnet size={48} />, level: 'Proficient' },
    { name: 'SQL', icon: <SiPostgresql size={48} />, level: 'Experienced' },
    { name: 'C++', icon: <SiCplusplus size={48} />, level: 'Familiar' },
    { name: 'Python', icon: <SiPython size={48} />, level: 'Familiar' },
    { name: 'MongoDB', icon: <SiMongodb size={48} />, level: 'Familiar' },
];

export const tools: Skill[] = [
    { name: 'Git', icon: <SiGit size={48} />, level: 'Experienced' },
    { name: 'GitHub', icon: <SiGithub size={48} />, level: 'Experienced' },
    { name: 'Linux', icon: <SiLinux size={48} />, level: 'Familiar' },
    { name: 'Vercel', icon: <SiVercel size={48} />, level: 'Familiar' },
];
