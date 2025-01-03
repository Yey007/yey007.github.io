import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "off-white": "#f2f0ef",
                "link-highlight-blue": "#557c99",
                "link-highlight": "#997255",
                link: "#557c99",
                "light-metal": "#313131",
                "dark-metal": "#292929",
                "darker-metal": "#161616"
            },
            height: {
                18: "4.5rem",
            },
            spacing: {
                18: "4.5rem",
            },
        },
        fontFamily: {
            sans: ["Cantarell", ...defaultTheme.fontFamily.sans],
            mono: ["Courier New", ...defaultTheme.fontFamily.mono],
        }
    },
    plugins: [],
};
