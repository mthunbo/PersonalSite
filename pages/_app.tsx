import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import { Marcellus, Orbitron, Great_Vibes } from "next/font/google";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Basic Metadata */}
        <title>Mark Thunbo – Developer, Dreamer, Doer</title>
        <meta
          name="description"
          content="Personal portfolio of Mark Thunbo – curious developer, driven learner, building creative solutions with code and compassion."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#004225" />

        {/* Open Graph (for social preview like Discord, Facebook) */}
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

      <main
        className={`${marcellus.variable} ${orbitron.variable} ${greatVibes.variable}`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
