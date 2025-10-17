import { useState } from "react"
import { SectionLayout } from "./SectionLayout"
import HoloScrollButton from "./HoloScrollButton"
import Modal from "./Modal"
import ProjectModal from "./ProjectModal"

interface ProjectProps {
    repos: any[];
}

export default function Projects({ repos }: ProjectProps) {
    const [selectedProject, setSelectedProject] = useState<any | null>(null)
    const [originPoint, setOriginPoint] = useState({ top: 0, left: 0 })

    const handleProjectSelect = (repo: any, event: React.MouseEvent<HTMLButtonElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setOriginPoint({
            top: rect.top + rect.height / 2,
            left: rect.left + rect.width / 2,
        })
        setSelectedProject(repo);
    }

    const handleClose = () => {
        setSelectedProject(null)
    }

    const filteredRepos = repos.filter(
        (repo) => !repo.fork && !repo.private && !repo.archived
    )

    const ScanlineEffect = () => (
        <div className="bg-scanline w-full h-full bg-repeat opacity-50 animate-scanline-scroll" />
    )

    return (
        <SectionLayout
            id="Projects"
            title="Creations"
            subtitle="A Library of Digital Artifacts"
            fromColorClass="from-background"
            toColorClass="to-surface"
            className="min-h-screen"
        >
            <div className="w-full max-w-7xl px-6 mx-auto pb-32">
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
                backgroundSlot={<ScanlineEffect/>}
            >
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={handleClose}
                    />
                )}
            </Modal>
        </SectionLayout>
    )
}