module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFFAF0",
          secondary: "#004680",
        accent: "#0d082b",
          neutral: "#0d082b",
          "base-100": "#ffffff",
        },
       
      },
      "light",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}
