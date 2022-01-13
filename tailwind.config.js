module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red: "#F94F46",
        yellow: "#FFCF2D",
        wine: "#5B2448",
        blue: "#21A0AA",
        white: "#FFFAEA"
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 1.3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
