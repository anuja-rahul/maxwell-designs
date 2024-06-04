import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        defaultTheme: {
          primary: "#111827",
          secondary: "#0832BD",
          accent: "#BDCCFF",
          neutral: "#4b5563",
          "base-100": "#f5d0fe",
          info: "#f3f4f6",
          success: "#4ade80",
          warning: "#e11d48",
          error: "#be123c",
        },
      },
      "night",
    ],
  },
};
export default config;
