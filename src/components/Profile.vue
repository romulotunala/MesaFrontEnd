<template>
  <div class="overlayer">
    <div class="modal">
      <button class="fa fa-times"
        @click="OPEN_PROFILE" />
      <img :src="user.avatar" alt="Avatar">
      <p class="name">
        {{ user.first_name }} {{ user.last_name }}
      </p>
      <p class="email">
        {{ user.email }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['OPEN_PROFILE'])
  }
}
</script>

<style scoped>
  .overlayer {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF8;
  }
  .modal {
    min-width: 12.5rem;
    min-height: 6.25rem;
    padding: 1rem;
    border-radius: 0.25rem;
    background: #FFF;
    box-shadow: #000000F7 0px 1px 4px -1px;
    color: #555;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    padding: .9rem;
    background: none;
    border: none;
    color: #555;
    position: absolute;
    top: 0;
    right: 0;
  }
  img {
    width: 50%;
    border-radius: 50%;
    display: block;
  }
</style>