<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">                     
          <v-card
          class="mx-auto mb-5"
          max-width="900px"
          v-for="post in posts.data" :key="post.id"
          >
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="post.user.username"></v-list-item-title>
              <v-list-item-subtitle v-text="post.user.role"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <!-- <v-card-actions class="ml-2">
            <router-link to="/dashboard">
              <v-icon>mdi-comment</v-icon>
            </router-link>
          </v-card-actions> -->
          <v-card-title>
            <div v-text="post.title"></div>
          </v-card-title>
          <v-card-subtitle>
            <div v-text="post.description"></div>
          </v-card-subtitle>  
          <v-card-subtitle>
            <v-card-actions>
              <router-link :to="{name: 'timeline.comment'}">
                  <div>View all comments</div>
              </router-link>
            </v-card-actions>
          </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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