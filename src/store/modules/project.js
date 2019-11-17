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
  getProjects({commit}){
   // let search = typeof payload != 'undefined' ? payload:''
    return new Promise((resolve) =>{
      $axios.get(`/projects`)
      .then((response) => {
        commit('ASSIGN_DATA', response.data.result.projects)
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