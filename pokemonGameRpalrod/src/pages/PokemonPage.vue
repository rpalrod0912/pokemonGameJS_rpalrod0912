import PokemonPictures from '../components/PokemonPictures.vue';

<template>
  <div>
    <h1>¿Cuál es este Pokémon?</h1>

    <PokemonPicture></PokemonPicture>

    <PokemonOptions></PokemonOptions>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";

export default {
  components: { PokemonOptions, PokemonPicture },
};
</script>

<style></style>
