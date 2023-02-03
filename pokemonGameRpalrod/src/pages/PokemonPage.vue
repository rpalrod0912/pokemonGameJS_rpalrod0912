<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else="pokemon">
    <h1>¿Cuál es este Pokémon?</h1>

    <PokemonPicture
      :pokemonId="pokemon.id"
      :mostrarPkm="showPkm"
    ></PokemonPicture>

    <PokemonOptions
      :pokemons="pkmnsArr"
      @selection="verificarRes"
    ></PokemonOptions>

    <template v-if="mostrarResp">
      <h2 class="fade-in">{{ msj }}</h2>
      <button @click="nuevoJuego">Empezar de Nuevo</button>
    </template>
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
      pokemon: null,
      showPkm: false,
      mostrarResp: false,
      msj: "",
    };
  },
  methods: {
    async mixedPkmArr() {
      this.pkmnsArr = await getPokemonOptions();
      const intRand = Math.floor(Math.random() * 4);
      this.pokemon = this.pkmnsArr[intRand];
      console.log(this.pokemon.id);
    },
    verificarRes(selectId) {
      this.showPkm = true;
      this.mostrarResp = true;

      if (selectId === this.pokemon.id) {
        this.msj = `Bien!!, era ${this.pokemon.name}`;
      } else {
        this.msj = `Mal!!!, era ${this.pokemon.name}`;
      }
    },
    nuevoJuego() {
      (this.showPkm = false),
        (this.mostrarResp = false),
        (this.pkmnsArr = []),
        this.mixedPkmArr(),
        (this.pokemon = null);
    },
  },
  mounted() {
    this.mixedPkmArr();
  },
};
</script>

<style></style>
