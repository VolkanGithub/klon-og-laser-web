import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Orbitron'u 'font-orbitron' sınıfıyla çağırabileceğiz
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        // Varsayılan fontumuz (Inter vb.)
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
      screens: {
        'xs': '375px', // iPhone SE gibi küçük cihazlar için özel kırılma noktası
      }
    },
  },
  plugins: [],
};
export default config;