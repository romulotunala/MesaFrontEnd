<template>
  <div id="app">
    <Menu />
    <Map />
    <SignIn
      v-if="$store.state.showLogin"
    />
    <SignUp
      v-if="$store.state.showRegister"
    />
    <Profile
      v-if="$store.state.showProfile"
    />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Map from './components/Map.vue';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
import Profile from './components/Profile.vue';


export default {
  name: 'App',
  components: {
    Menu,
    Map,
    SignIn,
    SignUp,
    Profile
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
