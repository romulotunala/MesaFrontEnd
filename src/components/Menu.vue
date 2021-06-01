<template>
  <header class="headerContainer">
    <img class="headerLogo" :src="logo" alt="">
    <nav class="headerMenu" >
      <a
        v-for="item in itemMenu"
        :key="item.id"
        href="#"
        @click="item.func"
      >{{ item.label }}</a>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";

// Assets
import logo from '../assets/logo.svg';


export default {
  data() {
    return {
      logo,
    }
  },
  computed: {
    ...mapState(['token']), 
    itemMenu() {
      if(!this.token) {
        return [{
          id: 1,
          label: "Login",
          func: this.OPEN_LOGIN,
        }]
      } else {
        return [{
          id: 1, 
          label: 'Perfil', 
          func: () => {
            this.GET_PROFILE();
            this.OPEN_PROFILE();
          },
        },
        {
          id: 2,
          label: 'Logout',
          func: this.LOGOUT,
        }]
      }
    }
  },
  methods: {
    ...mapMutations(['OPEN_LOGIN', 'OPEN_PROFILE', 'LOGOUT', 'GET_PROFILE'])
  }
}
</script>

<style scoped>
  .headerContainer {
    width: 100vw;
    height: 5rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .headerLogo {
    height: 60%;
  }
  .headerMenu {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .headerMenu a {
    min-width: 6.25rem;
    height: 100%;
    margin: auto;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .headerMenu a:hover {
    background: blue;
    color: white;
    font-weight: bold;
  }
</style>
