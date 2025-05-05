export const pokemonColor = (type, opacity = 0.1) => {
  const hexColors = {
    normal: "#AAA67F",
    fighting: "#C12239",
    flying: "#A891EC",
    poison: "#A43E9E",
    ground: "#DEC16B",
    rock: "#B69E31",
    bug: "#A7B723",
    ghost: "#70559B",
    steel: "#B7B9D0",
    fire: "#F57D31",
    water: "#6493EB",
    grass: "#74CB48",
    electric: "#F9CF30",
    psychic: "#FB5584",
    ice: "#9AD6DF",
    dragon: "#7037FF",
    dark: "#75574C",
    fairy: "#E69EAC",
  };

  const hex = hexColors[type.toLowerCase()];
  if (!hex) return `rgba(0,0,0,${opacity})`;

  // Convert HEX to RGBA
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`; // opacity 50%
};
