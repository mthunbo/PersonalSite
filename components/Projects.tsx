import { useState } from 'react';
import { SectionLayout } from './SectionLayout';
import HoloScrollButton from './HoloScrollButton';
import Modal from './Modal';
import ProjectModal from './ProjectModal';

interface ProjectProps {
    repos: any[];
}

export default function Projects({ repos }: ProjectProps) {
    const [selectedProject, setSelectedProject] = useState<any | null>(null);
    const [originPoint, setOriginPoint] = useState({ top: 0, left: 0 });

    const handleProjectSelect = (repo: any, event: React.MouseEvent<HTMLButtonElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setOriginPoint({
            top: rect.top + rect.height / 2,
            left: rect.left + rect.width / 2,
        });
        setSelectedProject(repo);
    };

    const handleClose = () => {
        setSelectedProject(null);
    };

    const filteredRepos = repos.filter((repo) => !repo.fork && !repo.private && !repo.archived);

    const ScanlineEffect = () => (
        <div className="bg-scanline w-full h-full bg-repeat opacity-50 animate-scanline-scroll" />
    );

    if (!filteredRepos || filteredRepos.length === 0) {
        return (
            <SectionLayout
                id="Projects"
                title="Projects"
                subtitle="A Library of Digital Artifacts"
                className="min-h-screen"
            >
                <div className="container mx-auto px-6 py-16 text-center">
                    <p className="text-lg text-text-muted">
                        Could not load project information from GitHub at this time. Please try
                        reloading the page or check back later.
                    </p>
                </div>
            </SectionLayout>
        );
    }

    return (
        <SectionLayout
            id="Projects"
            title="Projects"
            subtitle="A Library of Digital Artifacts"
            className="min-h-screen"
        >
            <div className="w-full max-w-7xl px-6 mx-auto pb-32 mt-12">
                <div className="grid gap-x-6 gap-y-12 w-full justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredRepos.map((repo) => (
                        <HoloScrollButton
                            key={repo.id}
                            title={repo.name}
                            onClick={(event) => handleProjectSelect(repo, event)}
                        />
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedProject}
                onClose={handleClose}
                originPoint={originPoint}
                variant="hologram"
                backgroundSlot={<ScanlineEffect />}
            >
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={handleClose} />
                )}
            </Modal>
        </SectionLayout>
    );
}
