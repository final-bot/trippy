import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "-apple-system", "sans-serif"],
      },
      colors: {
        brand: {
          black:     "#141414",
          para:      "#5A5A5A",
          bg:        "#FAFAFA",
          line:      "#E1E1E1",
          highlight: "#C8F0D0",
          accent:    "#F5A623",
        },
      },
    },
  },
  plugins: [],
};

export default config;
