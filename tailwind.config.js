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
            primary: "#F7FAFC",
            accent: {
               DEFAULT: "#1D4ED8",
               hover: "#1E40AF",
            },
            secondary: {
               DEFAULT: "#94A3B8",
               hover: "#64748B",
            },
            tertiary: {
               DEFAULT: "#E2E8F0",
               hover: "#CBD5E0",
            },
            text: "#1A202C",
            lightText: "#4A5568",
            white: "#FFFFFF",
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
