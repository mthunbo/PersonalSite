import React from "react"
import { Button } from "./Button"

type ProjectModalProps = {
    project: any
    onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const username = "mthunbo";
    const repoUrl = project.html_url;
  
    let liveUrl = project.homepage && project.homepage.trim() !== "" ? project.homepage : "";
    if (!liveUrl && project.has_pages) {
        liveUrl = `https://${username}.github.io/${project.name}`;
    }

    return (
        <>
            <h2 className="text-2xl font-heading text-highlight mb-6 font-bold">
                {project.name}
            </h2>
        
            <div className="w-1/2 mx-auto aspect-square bg-black/20 rounded-md border-2 border-highlight overflow-hidden">
                <img 
                    src={project.logo} 
                    alt={`${project.name} logo`} 
                    className="w-full h-full object-contain" 
                />
            </div>
        
            <p className="mt-6 text-text-muted ">
                {project.description}
            </p>
        
            <div className="mt-6 pt-6 border-t-2 border-highlight flex justify-between items-center">
                <div className="flex gap-4">
                    {repoUrl && (
                        <Button variant="project" size="md" onClick={() => window.open(repoUrl, "_blank")}>
                            View Code
                        </Button>
                    )}
                    {liveUrl && (
                        <Button variant="secondary" size="md" onClick={() => window.open(liveUrl, "_blank")}>
                            View Live
                        </Button>
                    )}
                </div>
                <Button onClick={onClose} variant="secondary" size="md">
                    Close
                </Button>
            </div>
        </>
    )
}