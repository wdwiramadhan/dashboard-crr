<template>
  <div>
    <nav>
      <v-app-bar class="deep-purple mb-5">
      <router-link style="text-decoration:none" :to="{name : 'timeline.project'}">
        <v-icon color="white">mdi-arrow-left</v-icon>
      </router-link>
      <v-toolbar-title class="white--text ml-2">Comments</v-toolbar-title>
    </v-app-bar>  
    </nav>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            class="mx-auto mb-5"
          >
             <v-list-item >
              <v-list-item-avatar color="grey">
                 <v-img
                src="../../assets/avatar.png"
                width="50px"
              ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="post.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-subtitle v-text="post.description"></v-card-subtitle>
            <v-card-subtitle>
              <div class="mt-5">Comments</div>
            </v-card-subtitle>
            <div v-for="comment in comments.data" :key="comment.id">
              <v-list-item>
                <v-list-item-avatar color="grey">
                  <v-img
                  src="../../assets/avatar.png"
                  width="50px"
                ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title >Pimpinan</v-list-item-title>
                  <v-list-item-subtitle >Pimpinan</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text v-text="comment.comment"></v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  created(){
    this.getCommentByPostId(this.$route.params.id)
    this.getPostById(this.$route.params.id)
  },
  computed:{
    ...mapState('Comment', {
      comments : state=>state.comments
    }),
    ...mapState('Post', {
      post : state=>state.post
    }),
  },
  methods:{
    ...mapActions('Comment', ['getCommentByPostId']),
    ...mapActions('Post', ['getPostById'])
  },
}
</script>