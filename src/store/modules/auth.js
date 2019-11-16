import $axios from '../../api'

const state = () => ({

})

const mutations = {

}

const actions = {
  submit({commit}, payload){
    localStorage.setItem('token', null)
    commit('SET_TOKEN', null, {root:true})
    return new Promise((resolve) =>{
      $axios.post(`/auth/login`, payload)
      .then((response) => {
        if(response.data.status == true){
          localStorage.setItem('token', response.data.result.access_token)
          commit('SET_TOKEN', response.data.data, { root: true })
        }else {
          commit('SET_ERRORS', { invalid: 'Wrong Email/Password' }, { root: true })
        }
        resolve(response.data)
      })
      .catch((error) => {
        if (error.response.status == 422) {
          commit('SET_ERRORS', error.response.data.errors, { root: true })
        }
      })
    })
  },
  logout({commit}){
    commit('CLEAR_TOKEN', null, {root:true})
    localStorage.removeItem('token')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
