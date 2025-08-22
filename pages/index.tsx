import { SectionHeader } from "../components/SectionHeader";
import Projects from "../components/Projects";
import { getGitHubRepos } from "../lib/github";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  fork: boolean;
  private: boolean;
  archived: boolean;
}

interface HomeProps {
  repos: Repo[];
}

export default function Home({ repos }:HomeProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-background to-surface">
        <SectionHeader 
          title="Mark Thunbo"
          subtitle=""
          align="center"
          size="lg"
          className="text-gold-header"
        />      
      </section>

      {/* About */}
      <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-surface to-background">
        <SectionHeader
          title="About"
          subtitle=""
          align="center"
          size="lg"
          className="text-gold-header"
        />
      </section>

      {/* Journey */}
      <section className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-background to-surface">
      <SectionHeader 
          title="Journey"
          subtitle=""
          align="center"
          size="lg"
          className="text-gold-header"
        /> 
      </section>

      {/* Skills */}
      <section className="h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-surface to-background">
        <SectionHeader 
          title="Skills"
          subtitle=""
          align="center"
          size="lg"
          className="text-gold-header"
        /> 
      </section>

      {/* Projects */}
      <Projects repos={repos} />

      {/* Game */}
      <section className="h-screen flex flex-col items-center pt-20 bg-gradient-to-b from-surface to-background text-highlight"
      style={{ height: 'calc(100vh - 6rem)' }}
      >
      <SectionHeader 
          title="Ceaser in Gaul"
          subtitle=""
          align="center"
          size="lg"
          className="text-gold-header"
        /> 
      </section>
    </>
  );
}

export async function getStaticProps() {
  const repos = await getGitHubRepos("mthunbo");

  return {
    props: { repos },
    revalidate: 3600
  };
}