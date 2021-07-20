import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null
  },
  mutations: {
    updateIdToken(state, idToken){
      state.idToken = idToken;
    }
  },
  actions: {
    login({ commit }, authData){
      const URL = '/accounts:signInWithPassword?key=' + process.env.VUE_APP_FIREBASE_API_KEY
      axios.post(URL, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      }).then(response => {
        commit('updateIdToken', response.data.idToken)
      });
    },
    register({ commit }, authData){
      const URL = '/accounts:signUp?key=' + process.env.VUE_APP_FIREBASE_API_KEY
      axios.post(URL, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      }).then(response => {
        commit('updateIdToken', response.data.idToken)
      });
    }
  }
});