import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Auth,
  },
  state: {
    token: localStorage.getItem('token'),
    errors:[]
  },
  getters:{
    isLogedIn(state){
      return state.token !== null ? true : false;
    }
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    CLEAR_TOKEN(state, payload){
      state.token = payload
    },
    SET_ERRORS(state, payload) {
      state.errors = payload
    },
    CLEAR_ERRORS(state) {
      state.errors = []
    }
  },
  actions: {
  }
})