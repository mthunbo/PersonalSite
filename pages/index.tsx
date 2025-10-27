import Projects from '../components/Projects';
import { getGitHubRepos } from '../lib/github';
import About from '../components/About';
import Journey from '../components/Journey';
import Skills from '../components/Skills';
import Hero from '../components/Hero';
import CaesarInGaul from '../components/CaesarInGaul';

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage?: string | null;
    fork: boolean;
    private: boolean;
    archived: boolean;
    has_pages?: boolean;
}

interface HomeProps {
    repos: Repo[];
}

export default function Home({ repos }: HomeProps) {
    return (
        <>
            <Hero />

            <About />

            <Journey />

            <Skills />

            <Projects repos={repos} />

            <CaesarInGaul />
        </>
    );
}

export async function getStaticProps() {
    const repos = await getGitHubRepos('mthunbo');

    return {
        props: { repos },
        revalidate: 3600,
    };
}
