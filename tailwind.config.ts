import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  
    extend: {
      colors: {
        'empress': {
          DEFAULT: '#7D7175',
          50: '#D5D1D2',
          100: '#CBC6C8',
          200: '#B8B0B3',
          300: '#A59B9E',
          400: '#918689',
          500: '#7D7175',
          600: '#605659',
          700: '#423C3E',
          800: '#252122',
          900: '#070607',
          950: '#000000'
        },

      },

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
