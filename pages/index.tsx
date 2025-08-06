export default function Home() {
  return (
    <div className="min-h-screen bg-background-dark text-text-light font-body p-8 space-y-16">
      {/* Hero Section */}
      <header className="text-center">
        <h1 className="font-heading text-6xl text-heading mb-2">Mark Hansen</h1>
        <p className="text-xl">Curious. Grounded. A little goofy.</p>
        <p className="font-signature text-2xl text-royal mt-4">~ Crafted with love</p>
      </header>

      {/* About Section */}
      <section className="bg-card-bg p-6 rounded-lg shadow-md">
        <h2 className="font-heading text-3xl text-heading mb-4">About Me</h2>
        <p>
          I'm a developer with a love for sci-fi and ancient philosophy. This site is both a showcase and a reflection of my thoughts.
        </p>
        <button className="mt-4 bg-accent hover:bg-accent-hover text-text-light px-6 py-2 rounded transition font-heading">
          Get in Touch
        </button>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="font-heading text-3xl text-heading mb-6">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card-bg p-4 rounded-lg">
            <h3 className="font-heading text-2xl text-primary mb-2">Project Alpha</h3>
            <p>A futuristic app that helps people track their dreams. Built with Next.js and MongoDB.</p>
          </div>
          <div className="bg-card-bg p-4 rounded-lg">
            <h3 className="font-heading text-2xl text-primary mb-2">The Roman Game</h3>
            <p>A turn-based strategy browser game inspired by the Roman Empire.</p>
          </div>
        </div>
      </section>

      {/* Button Preview */}
      <section>
        <h2 className="font-heading text-3xl text-heading mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-accent text-text-light px-6 py-2 rounded hover:bg-accent-hover transition">Accent Button</button>
          <button className="bg-primary-button text-text-light px-6 py-2 rounded hover:bg-primary-light transition">Primary Button</button>
          <button className="bg-royal text-text-light px-6 py-2 rounded hover:bg-royal-hover transition">Royal Button</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12 pt-6 text-center">
        <p className="text-sm">Made with ❤️ by Mark — Inspired by code, stars, and ancient minds.</p>
      </footer>
    </div>
  );
}
