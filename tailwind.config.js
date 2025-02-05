/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      colors: {
        "pensa-blue": {
          20: "#D1D7F1",
          50: "#6A7BD3",
          70: "#232E65",
          100: "#000626",
        },
        "pensa-red": {
          20: "#FFECEE",
          50: "#E2717D",
          70: "#BE1E2D",
          100: "#99000F",
        },
      },
      animation: {
        background: "background 2s ease-in-out infinite",
        linear: "backgroundLinear 3s linear infinite",
        slide:
          "backgroundSlide 120s linear infinite alternate-reverse forwards;",
        fade: "fadeIn .5s ease-in-out",
      },
      keyframes: {
        background: {
          "0%, 100%": { backgroundPosition: "left 0% bottom 0%" },
          "50%": { backgroundPosition: "left 200% bottom 0%" },
        },
        backgroundLinear: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        backgroundSlide: {
          "0%": { backgroundPosition: "0 0%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },

      fontFamily: {
        DMSerifText: ["DMSerif"],
      },
    },
  },
  plugins: [],
};
