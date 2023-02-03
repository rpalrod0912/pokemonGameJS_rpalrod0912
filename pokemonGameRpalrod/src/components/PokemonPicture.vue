<template>
  <div class="pokemon-container">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      alt="pokemonImage"
      class="hidden-pokemon"
    />
    <!--
        PARA MAS TARDE....
        <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      alt="pokemon"
      class="fade-in" /> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.pokemon-container {
  height: 200px;
  position: relative;
}

img {
  height: 200px;
  position: absolute;
  left: 50%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;

  transform: translateX(-50%);
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
