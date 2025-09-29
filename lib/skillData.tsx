import {
  SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiFramer, SiHtml5, SiCss3,
  SiSharp, SiCplusplus, SiPython, SiDotnet, SiMongodb, SiPostgresql,
  SiGit, SiGithub, SiLinux, SiVercel,
} from 'react-icons/si';

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: 'Legatus' | 'Centurion' | 'Legionary';
}

export const frontendSkills: Skill[] = [
  { name: 'TypeScript', icon: <SiTypescript size={48} />, level: 'Centurion' },
  { name: 'React (Native)', icon: <SiReact size={48} />, level: 'Centurion' },
  { name: 'JavaScript', icon: <SiJavascript size={48} />, level: 'Legionary' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} />, level: 'Legionary' },
  { name: 'HTML5', icon: <SiHtml5 size={48} />, level: 'Legionary' },
  { name: 'CSS3', icon: <SiCss3 size={48} />, level: 'Legionary' },
  { name: 'Framer Motion', icon: <SiFramer size={48} />, level: 'Legionary' },
]
export const backendSkills: Skill[] = [
  { name: 'C#', icon: <SiSharp size={48} />, level: 'Legatus' },
  { name: '.NET / EF', icon: <SiDotnet size={48} />, level: 'Legatus' },
  { name: 'SQL', icon: <SiPostgresql size={48} />, level: 'Centurion' },
  { name: 'C++', icon: <SiCplusplus size={48} />, level: 'Legionary' },
  { name: 'Python', icon: <SiPython size={48} />, level: 'Legionary' },
  { name: 'MongoDB', icon: <SiMongodb size={48} />, level: 'Legionary' },
]
export const tools: Skill[] = [
  { name: 'Git', icon: <SiGit size={48} />, level: 'Centurion' },
  { name: 'GitHub', icon: <SiGithub size={48} />, level: 'Centurion' },
  { name: 'Linux', icon: <SiLinux size={48} />, level: 'Legionary' },
]