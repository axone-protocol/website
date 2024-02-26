import type { Config } from "tailwindcss";

const config: Config = {
  important: true, // tailwind classes priority over boostrap (avoid class name conflict)
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      courrierPrime: ["var(--font-courrier-prime)"],
      sixtyFour: ["var(--font-sixty-four)"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        orange: "#FB9501",
      },
    },
  },
  plugins: [],
};
export default config;
