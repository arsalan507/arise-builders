import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        sand: "#F0ECE4",
        dark: "#1A1A1A",
        accent: "#C8956C",
        "accent-dark": "#A67A52",
        "accent-light": "#E4C9AD",
        warm: {
          50: "#FDFCFA",
          100: "#F7F5F0",
          200: "#EDE9E0",
          300: "#D4CFC3",
          400: "#B5AE9E",
          500: "#8F8776",
          600: "#6B6355",
          700: "#4A4339",
          800: "#2D2820",
          900: "#1A1610",
        },
      },
      fontFamily: {
        heading: ["'DM Serif Display'", "Georgia", "serif"],
        body: ["'Space Grotesk'", "'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
