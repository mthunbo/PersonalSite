import { SectionLayout } from './SectionLayout';
import SkillIcon from './SkillIcon';
import { frontendSkills, backendSkills, tools } from '../lib/skillData';

export default function Skills() {
    return (
        <SectionLayout id="Skills" title="Skills" subtitle="The Tools and Technologies I Use">
            <div className="container mx-auto px-8 py-8 text-center">
                <div className="space-y-16">
                    <div>
                        <h3 className="font-heading text-2xl text-highlight mb-8 inline-block pb-2 border-b-4 border-primary">
                            Frontend
                        </h3>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-8">
                            {frontendSkills.map((skill) => (
                                <SkillIcon
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading text-2xl text-highlight mb-8 inline-block pb-2 border-b-4 border-primary">
                            Backend
                        </h3>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-8">
                            {backendSkills.map((skill) => (
                                <SkillIcon
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading text-2xl text-highlight mb-8 inline-block pb-2 border-b-4 border-primary">
                            Tools & Platforms
                        </h3>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-8">
                            {tools.map((skill) => (
                                <SkillIcon
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}
