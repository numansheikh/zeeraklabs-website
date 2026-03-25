import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15ffd1',
        'primary-container': '#004d40',
        'on-primary': '#00372e',
        'on-primary-container': '#b9ffe8',
        secondary: '#a2d1ca',
        'secondary-container': '#1c272c',
        'on-secondary': '#0c3732',
        surface: '#070f12',
        'on-surface': '#e0e3e1',
        'surface-container': '#121d21',
        'surface-container-low': '#0c1518',
        'surface-container-high': '#1c272c',
        'surface-container-highest': '#273236',
        background: '#070f12',
        outline: '#899390',
        'outline-variant': '#41494d',
        'on-surface-variant': '#6e777a',
      },
      fontFamily: {
        headline: ['var(--font-jakarta)', 'sans-serif'],
        body: ['var(--font-jakarta)', 'sans-serif'],
        label: ['var(--font-jakarta)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [],
}

export default config
