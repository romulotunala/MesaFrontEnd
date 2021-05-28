<template>
  <div id="app">
    <Menu />
    <Map />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Map from './components/Map.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Map
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
