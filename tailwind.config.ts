// MODIF: Custom Tailwind configuration for the Cyber/Software Engineering dark-mode theme
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
    './layouts/**/*.{vue,ts,js}',
    './pages/**/*.{vue,ts,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#0B1120',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular'],
      },
      animation: {
        'typing-cursor': 'blink 1s step-end infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
      boxShadow: {
        'cyan-glow': '0 0 24px rgba(6,182,212,0.35)',
        'cyan-glow-lg': '0 0 40px rgba(6,182,212,0.5)',
        'emerald-glow': '0 0 20px rgba(52,211,153,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config
