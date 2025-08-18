import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-background to-surface">
        <SectionHeader 
          title="Mark Thunbo"
          subtitle=""
          align="center"
          size="lg"
        />      
      </section>

      {/* Journey */}
      <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-surface to-background">
      <SectionHeader 
          title="Journey"
          subtitle=""
          align="center"
          size="lg"
        /> 
      </section>

      {/* Skills */}
      <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-background to-surface">
        <SectionHeader 
          title="Skills"
          subtitle=""
          align="center"
          size="lg"
        /> 
      </section>

      {/* Projects */}
      <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-surface to-background">
        <SectionHeader 
          title="Projects"
          subtitle=""
          align="center"
          size="lg"
        />         

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12">
          {[
            {
              title: "Portfolio Website",
              description: "Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
              repoUrl: "https://github.com/yourusername/portfolio",
              liveUrl: "https://yourportfolio.com",
            },
            {
              title: "Book Tracker",
              description: "A web app for tracking reading progress and sharing reviews.",
              repoUrl: "https://github.com/yourusername/book-tracker",
              liveUrl: "",
            },
            {
              title: "Task Manager",
              description: "A family chore/task manager with rewards system.",
              repoUrl: "https://github.com/yourusername/task-manager",
              liveUrl: "",
            },
          ].map((project, idx) => (
            <Card
              key={idx}
              type="project"
              size="md"
              title={project.title}
              description={project.description}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </section>


      {/* Game */}
      <section className="min-h-[60vh] flex flex-col items-center pt-20 bg-gradient-to-b from-background to-surface text-highlight">
      <SectionHeader 
          title="Ceaser in Gaul"
          subtitle=""
          align="center"
          size="lg"
        /> 
      </section>
    </>
  );
}