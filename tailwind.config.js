module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Animations/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-primary',
    'bg-primary-light',
    'bg-primary-hover',
    'bg-accent',
    'bg-accent-hover',
    'bg-royal',
    'bg-royal-hover',
    'bg-highlight',
    'bg-surface',
    'bg-background',
    'text-text',
    'text-muted',
    'text-highlight',
    'text-background',
    'border-border'
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        surface: '#2A2A2A',
        border: '#3A3A3A',
        highlight: '#A68A64',
        text: {
          DEFAULT: '#E5E5E5',
          muted: '#A0A0A0',
        },
        accent: {
          DEFAULT: '#004225',
          light: '#3F7F62',
          hover: '#4F9D7B',
        },
        primary: {
          DEFAULT: '#5b0016',
          hover: '#800020',
          dark: '#4a0012',
        },
        royal: {
          DEFAULT: '#4B0082',
          hover: '#6A0DAD',
        },
        wood: {
          DEFAULT: '#5C3D2E',
          highlight: '#713f12',
        },
      },
      fontFamily: {
        body: ['var(--font-marcellus)', 'serif'],
        heading: ['var(--font-orbitron)', 'sans-serif'],
        signature: ['var(--font-marckscript)', 'cursive'],
      },
      boxShadow: {
        'hologram': '0 0 25px theme(colors.highlight)',
      },
      maskImage: {
        'circuit-pattern': "url('/circuitPattern.svg')",
      },
      backgroundImage: {
        'scanline': "url('/scanline.svg')"
      },
      animation: {
        'pulse-glow': 'pulse-opacity 4s ease-in-out infinite',
        'pan-background': 'pan-background 15s linear infinite',
        'scanline-scroll': 'scanline-scroll 10s linear infinite'
      },
    },
  },
  plugins: [],
};
