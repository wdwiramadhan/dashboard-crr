<template>
  <div>
    <v-card
    class="mx-auto mt-5"
    max-width="600px"
     v-for="post in posts.data" :key="post.id"
    >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      <div v-text="post.title"></div>
    </v-card-title>

    <v-card-subtitle>
      <div v-text="post.description"></div>
    </v-card-subtitle>

  </v-card>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    created(){
    this.getAllPost()
  },
  computed:{
    ...mapState('Post', {
      posts : state=>state.posts
    })
  },
  methods:{
    ...mapActions('Post', ['getAllPost'])
  },
}
</script>