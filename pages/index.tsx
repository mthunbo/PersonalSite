import Projects from "../components/Projects";
import { getGitHubRepos } from "../lib/github";
import About from "../components/About";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import CaeserInGaul from "../components/CaeserInGaul";

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
      <Hero/>

      <About/>

      <Journey/>

      <Skills/>

      <Projects repos={repos} />

      <CaeserInGaul/>

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