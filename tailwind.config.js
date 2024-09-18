/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "text-description": "#747476",
        "default-input": "#F2F2F2",

        primary: "#f00000",
        secondary: "#f0f0f0",

        //type
        "type-bug": "#8CB230",
        "type-dark": "#58575F",
        "type-dragon": "#0F6AC0",
        "type-electric": "#EED535",
        "type-fairy": "#ED6EC7",
        "type-fighting": "#D04164",
        "type-fire": "#FD7D24",
        "type-flying": "#748FC9",
        "type-ghost": "#556AAE",
        "type-grass": "#62B957",
        "type-ground": "#DD7748",
        "type-ice": "#61CEC0",
        "type-normal": "#9DA0AA",
        "type-poison": "#A552CC",
        "type-psychic": "#EA5D60",
        "type-rock": "#BAAB82",
        "type-steel": "#417D9A",
        "type-water": "#4A90DA",

        //bg
        bug: "#8BD674",
        dark: "#6F6E78",
        dragon: "#7383B9",
        electric: "#F2CB55",
        fairy: "#EBA8C3",
        fighting: "#EB4971",
        fire: "#FFA756",
        flying: "#83A2E3",
        ghost: "#8571BE",
        grass: "#8BBE8A",
        ground: "#F78551",
        ice: "#91D8DF",
        normal: "#B5B9C4",
        poison: "#9F6E97",
        psychic: "#FF6568",
        rock: "#D4C294",
        steel: "#4C91B2",
        water: "#58ABF6",
      },
    },
  },
  plugins: [],
};
