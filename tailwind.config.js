/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ["class"],
   content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      container: {
         center: true,
         padding: "15px",
      },
      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1310px",
      },
      fontFamily: {
         primary: "var(--font-poppins)",
         secondary: "var(--font-caveat)",
      },
      extend: {
         colors: {
            primary: "#2C3930",
            accent: {
               DEFAULT: "#946C50",
               hover: "#A27B5C",
            },
            secondary: {
               DEFAULT: "#3F4F44",
               hover: "#4F5F54",
            },
            tertiary: {
               DEFAULT: "#B8B1A4",
               hover: "#A29C90",
            },
            newgreen: "#3F4F44",
         },
         backgroundImage: {
            hero_bg1: "url('/assets/hero/hero-bg-1.png')",
            hero_bg2: "url('/assets/hero/hero-bg-2.png')",
            pattern: "url('/assets/pattern-bg.png')",
         },
      },
   },
   // eslint-disable-next-line @typescript-eslint/no-require-imports
   plugins: [require("tailwindcss-animate")],
};
