/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "tw-gray": "#8593A9",
        fontColor: "#111729",
        primary: {
          50: "#eff9ff",
          100: "#dff2ff",
          200: "#b7e7ff",
          300: "#77d5ff",
          400: "#2fc1ff",
          500: "#039de3",
          600: "#0087d1",
          700: "#006ba9",
          800: "#015b8b",
          900: "#074b73",
          950: "#05304c",
        },
      },
    },
  },
  plugins: [],
};
