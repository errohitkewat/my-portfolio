import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
/** @type {import('tailwindcss').Config} */


export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        gilroyMedium: ["Gilroy-Medium", "sans-serif"],
        gilroyRegular: ["Gilroy-Regular", "sans-serif"],
      },
    },
  },

  plugins: [react(), tailwindcss()],
});



