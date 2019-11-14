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
    isAuth: state => {
      return state.token != "null" && state.token != null
    }
  },
  mutations: {
    SET_TOKEN(state, payload) {
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
