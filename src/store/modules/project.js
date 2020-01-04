import $axios from '../../api'

const state = () =>({
  projects: [],
  page: []
})

const mutations = {
  ASSIGN_DATA(state, payload){
    state.projects = payload
  }
}

const actions = {
  async getProjects({commit}){
    return await $axios.get(`/projects`).then(response => {
      commit('ASSIGN_DATA', response.data.result.projects)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}