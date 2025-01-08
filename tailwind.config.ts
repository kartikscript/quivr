import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main:"#561FB0",
        dark:'#B080FD'
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        roboto: ["var(--font-roboto)", "serif"],
      }
    },
  },
  plugins: [],
};
export default config;
