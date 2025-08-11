module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        text: {
          DEFAULT: '#E5E5E5',
          muted: '#A0A0A0',
        },
        primary: {
          DEFAULT: '#004225',
          light: '#3F7F62',
          hover: '#4F9D7B',
        },
        accent: {
          DEFAULT: '#800020',
          hover: '#9A1E30',
        },
        royal: {
          DEFAULT: '#4B0082',
          hover: '#6A0DAD',
        },
        highlight: '#A68A64',
      },
      fontFamily: {
        body: ['var(--font-marcellus)', 'serif'],
        heading: ['var(--font-orbitron)', 'sans-serif'],
        signature: ['var(--font-greatvibes)', 'cursive'],
      },
    },
  },
  plugins: [],
};
