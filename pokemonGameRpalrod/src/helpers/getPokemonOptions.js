//Rebice Objeto Pkm

const getPokemons = () => {
  const pkmArray = Array.from(Array(650));
  return pkmArray.map((pkm, index) => index + 1);
};

//Mezclamos, es decir, ordenamos aleatoriamente el array
const getPokemonOptions = () => {
  const pkmArrayMix = getPokemons().sort(() => Math.random() - 0.5);
  getPokemonName(pkmArrayMix.splice(0, 4));
};

const getPokemonName = ([a, b, c, d] = []) => {
  console.log(a, b, c, d);
};

export default getPokemonOptions;
