import $axios from '../../api'

const state = () => ({
  posts: [],
})

const mutations = {
  ASSIGN_DATA(state, payload){
    state.posts = payload
  }
}

const actions = {
  getAllPost({commit}){
    //let search = typeof payload != 'undefined' ? payload:''
    return new Promise((resolve) => {
      $axios.get(`posts`)
      .then((response) => {
        // console.log(response.data.result)
        commit('ASSIGN_DATA', response.data.result)
        resolve(response.data)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}