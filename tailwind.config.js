/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{tsx,ts,jsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      },
      scrollbarWidth: {
        none: "none",
      },
      scrollbar: {
        hidden: "hidden",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".scrollbar-hidden": {
          "scrollbar-width": "none",
        },
        ".scrollbar-none": {
          "overflow": "hidden",
          "-ms-overflow-style": "none",
        },
        ".scrollbar-hidden::-webkit-scrollbar": {
          display: "none",
        },
      }, ["responsive"]);
    },
  ],
}

