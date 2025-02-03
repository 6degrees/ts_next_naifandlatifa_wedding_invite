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
    fontSize: {
      'xs': ['28px', { lineHeight: '1.5' }],      // Base 16pt
      'sm': ['32px', { lineHeight: '1.5' }],      // +4pt
      'base': ['36px', { lineHeight: '1.5' }],    // +4pt
      'lg': ['40px', { lineHeight: '1.4' }],      // +4pt
      'xl': ['44px', { lineHeight: '1.4' }],      // +4pt
      '2xl': ['48px', { lineHeight: '1.3' }],     // +4pt
      '3xl': ['52px', { lineHeight: '1.3' }],     // +4pt
      '4xl': ['56px', { lineHeight: '1.2' }],     // +4pt
      '5xl': ['60px', { lineHeight: '1.1' }],     // +4pt
      '6xl': ['64px', { lineHeight: '1.1' }],     // +4pt
      '7xl': ['68px', { lineHeight: '1' }],       // +4pt
      '8xl': ['72px', { lineHeight: '1' }],       // +4pt
      '9xl': ['76px', { lineHeight: '1' }],       // +4pt
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
