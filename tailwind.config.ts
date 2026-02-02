import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "maya-green": "#0B8A62",
        "maya-gold": "#F5C542",
        "maya-cream": "#F8F4EE"
      }
    }
  },
  plugins: []
};

export default config;
