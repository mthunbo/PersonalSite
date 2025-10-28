import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Marcellus, Orbitron, Marck_Script } from 'next/font/google';
import Layout from '../components/Layout';
import Custom404 from './404';

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-marcellus',
    display: 'swap',
});

const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-orbitron',
    display: 'swap',
});

const marckScript = Marck_Script({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-marckscript',
    display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
    const is404 = Component === Custom404;
    return (
        <div className={`${marcellus.variable} ${orbitron.variable} ${marckScript.variable}`}>
            <Head>
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                {/* Basic Metadata */}
                <title>Mark Thunbo – Developer, Dreamer</title>
                <meta
                    name="description"
                    content="Personal portfolio of Mark Thunbo – curious developer, driven learner, building creative solutions with code and compassion."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#800020" />
                {/* Open Graph */}
                <meta property="og:title" content="Mark Thunbo – Developer Portfolio" />
                <meta
                    property="og:description"
                    content="A digital temple of code, creativity, and curiosity."
                />
                <meta property="og:image" content="/og-image.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mark Thunbo – Developer Portfolio" />
                <meta
                    name="twitter:description"
                    content="A digital temple of code, creativity, and curiosity."
                />
                <meta name="twitter:image" content="/og-image.png" />
            </Head>

            {is404 ? (
                <Component {...pageProps} />
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </div>
    );
}
