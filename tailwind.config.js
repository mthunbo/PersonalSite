module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-primary',
    'bg-primary-light',
    'bg-accent',
    'bg-accent-hover',
    'bg-royal',
    'bg-highlight',
    'bg-card-bg',
    'bg-border',
    'text-text-light',
    'text-background-dark'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F7F62',
        'primary-light': '#4F9D7B',
        'primary-button': '#004225',
        accent: '#800020',
        'accent-hover': '#9A1E30',    
        royal: '#4B0082',             
        'royal-hover': '#6A0DAD',
        heading: '#A68A64',
        'background-dark': '#121212',
        'card-bg': '#2A2A2A',
        'text-light': '#E5E5E5',
        border: '#3A3A3A',
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
