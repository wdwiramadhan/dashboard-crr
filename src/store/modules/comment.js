import $axios from '../../api'

const state = () => ({
    comments : []
})

const mutations = {
  ASSIGN_DATA(state, payload){
    state.comments = payload
  }
}

const actions = {
  getCommentByPostId({commit}, payload){
    return new Promise((resolve) => {
      $axios.get(`/comments?post_id=${payload}`)
      .then((response) => {
        commit('ASSIGN_DATA', response.data.result)
        resolve(response.data)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}