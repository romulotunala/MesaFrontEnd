<template>
  <div class="headerContainer">
    <img class="headerLogo" :src="logo" alt="">
    <nav class="headerMenu" >
      <a
        v-for="item in itemMenu"
        :key="item.id"
        href="#"
      >{{ item.lable }}</a>
    </nav>
  </div>
</template>

<script>
import logo from '../assets/logo.svg';

export default {
  data() {
    return {
      logo,
      itemMenu: [
        {
          id: 1,
          lable: "Login"
        },
        {
          id: 2,
          lable: "Perfil"
        }
      ]
    }
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
