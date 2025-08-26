import { SectionLayout } from "./SectionLayout";
import { Card } from "./Card";

interface ProjectProps {
  repos: any[];
}

export default function Projects({ repos }: ProjectProps) {
  const username = "mthunbo";

  const filteredRepos = repos.filter(
    (repo) => !repo.fork && !repo.private && !repo.archived
  );

  return (
    <SectionLayout
    id="Projects"
      title="Projects"
      size="lg"
      align="center"
      fromColorClass="from-background"
      toColorClass="to-surface"
    >
      <div className="grid gap-6 w-full max-w-7xl px-6 mx-auto justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-32">
        {filteredRepos.map((repo) => {
          let liveUrl =
            repo.homepage && repo.homepage.trim() !== ""
              ? repo.homepage
              : "";

          if (!liveUrl && repo.has_pages) {
            liveUrl = `https://${username}.github.io/`;
          }

          return (
            <Card
              key={repo.id}
              image={repo.logo}
              type="project"
              size="sm"
              title={repo.name}
              description={repo.description || "No description available."}
              repoUrl={repo.html_url}
              liveUrl={liveUrl}
            />
          );
        })}
      </div>
    </SectionLayout>
  );
}
