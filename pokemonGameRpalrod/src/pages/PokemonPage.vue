<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else="pokemon">
    <h1>Tu puntuacion:{{ this.puntuacion }}</h1>
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
      <button @click="nuevoJuego(this.tipo)">Empezar de Nuevo</button>
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
      puntuacion: 0,
      comenzarDeNuevo: false,
      tipo: false,
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
        this.tipo = true;
        this.puntuacion += 1;
      } else {
        this.msj = `Mal!!!, era ${this.pokemon.name}`;
        this.tipo = false;
      }
    },
    nuevoJuego(tipo) {
      if (!tipo) {
        this.puntuacion = 0;
      }
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
