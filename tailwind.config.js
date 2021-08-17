module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: "#F6F8FA",
        dark: "#333333",

        sidebar: {
          light: "#FFFFFF",
          dark: "#2D2D2D",
        },
        title: {
          light: "#293154",
          dark: "#F6F8FA",
        },
        subtitle: "#9E9FA6",
        active: {
          light: "#563BFF",
          dark: "#F2C94C",
        },
        icons: "#C5C8D4",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  variants: {
    animation: ["hover", "group-hover"],
    display: ["group-hover"],
    transform: ["group-hover"],
  },
  plugins: [],
};
