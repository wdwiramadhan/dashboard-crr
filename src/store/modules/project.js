import $axios from '../../api'

const actions = () =>({
  projects: [],
  page: []
})

const mutations = {
  ASSIGN_DATA(state, payload){
    state.projects = payload
  }
}

const actions = {
  getProjects({commit, state}, payload){
    let search = typeof payload != 'undefined' ? payload:''
    return new Promise((resolve) =>{
      $axios.get(`/project?page=${state.page}&q=${search}`)
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
        resolve(response.data)
      })
    })
  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  actions
}