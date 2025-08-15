export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-surface">
        <h2 className="text-5xl font-bold text-highlight">Hero Section</h2>
      </section>

      {/* Journey */}
      <section className="min-h-[50vh] bg-gradient-to-b from-surface to-background flex items-center justify-center">
        <div className="text-3xl text-highlight">Journey Placeholder</div>

      </section>
      {/* Skills */}
      <section className="min-h-[50vh] bg-gradient-to-b from-background to-surface flex items-center justify-center">
        <div className="text-3xl text-highlight">Skills Placeholder</div>
      </section>

      {/* Projects */}
      <section className="min-h-screen bg-gradient-to-b from-surface to-background flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8 text-highlight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12">
          {[1, 2, 3].map((p) => (
            <div
              key={p}
              className="bg-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
            >
              Project {p}
            </div>
          ))}
        </div>
      </section>

      {/* Game */}
      <section className="min-h-[60vh] bg-gradient-to-b from-background to-surface flex items-center justify-center text-highlight">
        Game Section Placeholder
      </section>
    </>
  );
}




/*
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text font-body p-8 space-y-16">
      <header className="text-center">
        <h1 className="font-heading text-6xl text-highlight mb-2">Mark Thunbo</h1>
        <p className="text-xl">Curious. Grounded. A little goofy.</p>
        <p className="font-signature text-2xl text-royal mt-4">~ Crafted with love</p>
      </header>

      <section className="bg-surface p-6 rounded-lg shadow-md">
        <h2 className="font-heading text-3xl text-highlight mb-4">About Me</h2>
        <p>
          I'm a developer with a love for sci-fi and ancient philosophy. This site is both a showcase and a reflection of my thoughts.
        </p>
        <button className="mt-4 bg-accent hover:bg-accent-hover text-text px-6 py-2 rounded transition font-heading">
          Get in Touch
        </button>
      </section>

      <section>
        <h2 className="font-heading text-3xl text-highlight mb-6">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface p-4 rounded-lg">
            <h3 className="font-heading text-2xl text-primary-light mb-2">Project Alpha</h3>
            <p>A futuristic app that helps people track their dreams. Built with Next.js and MongoDB.</p>
          </div>
          <div className="bg-surface p-4 rounded-lg">
            <h3 className="font-heading text-2xl text-primary-light mb-2">The Roman Game</h3>
            <p>A runner browser game inspired by the Roman Empire and Google's Chrome Dino.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl text-highlight mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-accent text-text px-6 py-2 rounded hover:bg-accent-hover transition">Accent Button</button>
          <button className="bg-primary text-text px-6 py-2 rounded hover:bg-primary-hover transition">Primary Button</button>
          <button className="bg-royal text-text px-6 py-2 rounded hover:bg-royal-hover transition">Royal Button</button>
        </div>
      </section>

      <footer className="border-t border-border mt-12 pt-6 text-center">
        <p className="text-sm">Made with ❤️ by Mark — Inspired by code, stars, and ancient minds.</p>
      </footer>
    </div>
  );
}
*/