<template>
  <div class="overlayer">
    <div class="modal">
      <header class="header">
        <p class="label">
          ENTRAR
        </p>
        <button class="fa fa-times"
          @click="OPEN_LOGIN"
        />
      </header>
      <form @submit="signIn">
        <label for="email">
          Email
          <input
            name="email"
            type="text"
            v-model="email"
            :style="submitted && isError.email && inputError"
          />
          <div class="containerErrorMessage">
            <p class="errorMessage" v-if="submitted && isError.email">
              {{ isError.email }}
            </p>
          </div>
        </label>
        <label for="password">
          Senha
          <input
            type="password"
            v-model="password"
            :style="submitted && isError.password && inputError"
          />
          <div class="containerErrorMessage">
            <p class="errorMessage" v-if="submitted && isError.password">
              {{ isError.password }}
            </p>
          </div>
        </label>

        <div class="containerErrorMessage">
          <p class="errorMessage" v-if="submitted && loginMessageError">
            {{ loginMessageError }}
          </p>
        </div>
        <button>{{ isFetching ? 'Buscando...' : 'Entrar'}}</button>
        <p class="option">Ainda não possui uma conta? <a href="#" @click="OPEN_REGISTER">Cadastre-se.</a></p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { validateEmail } from '../dataFlow/utils';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      submitted: false,
      isError: {
        email: false,
        password: false
      },
      messageError: ''
    }
  },
  computed: {
    ...mapState(['loginMessageError', 'isFetching']),
    inputError() {
      return ({
        'borderColor': 'red'
      });
    }
  },
  watch: {
    email(val) {
      let isError = false;
      if(!val) isError ='Email requerido';
      if(!validateEmail(val)) isError = 'E-mail inválido';
      if(val && validateEmail(val)) isError = false;
      this.isError = {
        ...this.isError,
        email: isError
      }
    },
    password(val) {
      let isError = false;
      if(!val) isError ='Senha requerida';
      if(val && validateEmail(val)) isError = false;
      this.isError = {
        ...this.isError,
        password: isError
      }
    }
  },
  methods: {
    ...mapMutations(['LOGIN', 'OPEN_LOGIN', 'OPEN_REGISTER']),
    signIn(e) {
      e.preventDefault();
      this.submitted = true;

      if(this.email && validateEmail(this.email) && this.password) {
        this.LOGIN({
          email: this.email,
          password: this.password
        });
      }
    }
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
    min-width: 21.875rem;
    min-height: 6.25rem;
    border-radius: 0.25rem;
    background: #FFF;
    box-shadow: #000000F7 0px 1px 4px -1px;
    color: #555;
  }
  .header {
    width: 100%;
    padding: .75rem;
    border-bottom: 1px solid #ebebeb;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .header .label {
    color: #555;
  }
  .header button {
    padding: .9rem;
    background: none;
    border: none;
    color: #555;
    position: absolute;
    top: 0;
    right: 0;
  }
  form {
    padding: 1rem;
  }
  form label {
    margin-bottom: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  form label input {
    width: 100%;
    padding: .5rem;
    margin-top: .5rem;
    border: .03125rem solid #D3D3D3;
    border-radius: .1875rem;
    font-size: 1rem;
    color: #555;
  }
  form label input:focus {
    outline: none;
    box-shadow: #000 0px 1px 4px -1px;
  }
  .containerErrorMessage {
    min-height: 1.25rem;
  }
  .errorMessage {
    padding-top: .25rem;
    font-size: .75rem;
    color: red;
  }
  form button {
    width: 100%;
    padding: .5rem;
    border: none;
    border-radius: .1875rem;
    background: #555;
    font-size: 1rem;
    color: #FFF;
  }
  .option {
    margin-top: .8rem;
    font-size: .75rem;
    text-align: left;
  }
  .option a {
    color: blue;
    text-decoration: none;
    cursor: pointer;
  }
</style>