import PokemonPictures from '../components/PokemonPictures.vue';

<template>
  <div>
    <h1>¿Cuál es este Pokémon?</h1>

    <PokemonPicture :pokemonId="151"></PokemonPicture>

    <PokemonOptions :pokemons="pkmnsArr"></PokemonOptions>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import getPokemonOptions from "../helpers/getPokemonOptions";

export default {
  components: { PokemonOptions, PokemonPicture },
  data: () => {
    return {
      pkmnsArr: [],
    };
  },
  methods: {
    async mixedPkmArr() {
      this.pkmnsArr = await getPokemonOptions();
    },
  },
  mounted() {
    this.mixedPkmArr();
  },
};
</script>

<style></style>
