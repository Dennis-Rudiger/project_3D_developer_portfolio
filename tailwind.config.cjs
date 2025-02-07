/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#111144",
        secondary: "#f98513",
        tertiary: "#223382",
        "black-100": "#100c08",
        "black-200": "#15151c",
        "white-100": "#f2f3f4",
        "flower-blue": "#9bacd8",
        "jodhpur": "#dad1c8",
        "piquante": "#ca3f16",
        "cloud": "#dbe0e1",
        "lusty-lavender":"#8d5eb7",
        "azulando":"#211d49",
        "poodle": "#eecee6",
        "yoghurt": "#f5e9ce",
        "hotpink":"#85001a",
        "calmpink": "#c62a43",
        "hotblue": "#150460",
        "calmblue":"#2e2364",

      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "footer-gradient": "linear-gradient(to right, #211d49, #150460)",
      },
    },
  },
  plugins: [],
};
