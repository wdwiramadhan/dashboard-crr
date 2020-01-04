import $axios from '../../api'

const state = () => ({
  posts: [],
  post:{
    user_id: '',
    title: '',
    description: '',
    photo_id: ''
  }
})

const mutations = {
  ASSIGN_DATA(state, payload){
    state.posts = payload
  },
  ASSIGN_FORM(state, payload){
    state.post = payload
  }
}

const actions = {
  async getAllPost({commit}){
    const response =  await $axios.get(`posts`)
    const data = response.data.result  
    commit('ASSIGN_DATA', data)
  }, 
  async getAllPostById({commit}, payload){
    return await $axios.get(`/posts?project_id=${payload}`).then((response) => {
      commit('ASSIGN_DATA', response.data.result)
    })
  },
  async addPost({dispatch}, payload){
    return await $axios.post(`/posts`, payload).then(() => {
      dispatch('getAllPostById')
    })
  },
  getPostById({commit}, payload){
    return new Promise((resolve) => {
      $axios.get(`/posts/${payload}`)
      .then((response) => {
        commit('ASSIGN_FORM', response.data.result)
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