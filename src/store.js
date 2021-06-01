import Vue from 'vue'
import Vuex from 'vuex'
import { login, user } from './dataFlow/auth'
import { fetchDetailsPlaces } from './dataFlow/map-api'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    isFetching: false,
    token: null,
    user: null,
    showLogin: false,
    showRegister: false,
    showProfile: false,
    loginMessageError: '',
    place: null
  }, 
  mutations: {
    OPEN_LOGIN(state) {
      if(state.showRegister) state.showRegister = false;
      state.showLogin = !state.showLogin;
    },
    OPEN_REGISTER(state) {
      state.showLogin = false;
      state.showRegister = true;
    },
    CLOSE_REGISTER(state) {
      state.showRegister = false;
    },
    OPEN_PROFILE(state) {
      state.showProfile = !state.showProfile
    },
    LOGIN(state, payload) {
      state.isFetching = true;
      login(payload)
      .then((res) => {
        state.token = res.data.token;
        state.user = {
          id: res.data.id
        }
        state.loginMessageError = '';
        state.isFetching = false;
        state.showLogin = false;
        state.showRegister = false;
      })
      .catch(err => {
        console.log('err', err);
        state.isFetching = false;
        let messageError = 'Algo deu errado, tente novamente';
        if (err.response.data.error.toLowerCase() === 'user not found') {
          messageError = 'Usuário não encontrado'
        }
        if(err.response.data.error.toLowerCase() === 'note: only defined users succeed registration') {
          messageError = 'Esta API somente aceita usuários predefinidos'
        }
        state.loginMessageError = messageError;
        
        // Possible request errors
        // user not found
        // Missing password
        // Missing email or username
        // Note: Only defined users succeed registration
      })
    },
    LOGOUT(state) {
      state.token = null;
    },
    GET_PROFILE(state) {
      state.isFetching = true;
      user(state.user.id)
      .then(res => {
        state.isFetching = false;
        state.user = res.data.data;
      })
      .catch(err => {
        console.log(err);
        console.log('err.response', err.response)
      })
    },
    FETCH_DETAILS_PLACES(state, payload) {
      fetchDetailsPlaces(payload)
      .then(res => {
        console.log('data', res.result);
        state.place = res.result;

      })
    },
    CLEAR_PLACE(state) {
      state.place = null
    }
  }
})