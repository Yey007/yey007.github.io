/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "light-sky": "#3a7bba",
                ocean: "#2e6294",
                "light-metal": "#2b2b2b",
                "dark-metal": "#242424",
            },
            height: {
                18: "4.5rem",
            },
            spacing: {
                18: "4.5rem",
            },
        },
        fontFamily: {
            sans: ["Cantarell"]
        }
    },
    plugins: [],
};
