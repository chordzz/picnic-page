/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-main": "url('/src/assets/background.png')",
        "picnic-full": "url('/src/assets/picnic-full.png')",
        picnic: "url('/src/assets/picnic.png')",
        "picnic-mobile": "url('/src/assets/picnic-mobile.png')",
      },
      fontFamily: {
        Glora: ["Glora", "sans-serif"],
        MediaSans: ["Media Sans", "sans-serif"],
        Graduation: ["Graduation", "sans-serif"],
        SequelSans: ["Sequel Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
