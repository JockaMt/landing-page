import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: '#CC0000',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      keyframes: {
        flash: {
          '0%, 49.99%': { display: 'none' },
          '50%, 100%': { display: 'block' },
        },
      },
      animation: {
        flash: 'flash 1s infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
}

export default config