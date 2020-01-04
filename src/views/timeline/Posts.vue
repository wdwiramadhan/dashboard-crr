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
            <v-list-item-avatar color="grey">
              <v-img
                src="../../assets/avatar.png"
                width="50px"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="post.user.username"></v-list-item-title>
              <v-list-item-subtitle v-text="post.user.role"></v-list-item-subtitle>
            </v-list-item-content>
            <div v-if="post.type == 'report'">
              <v-chip
                class="ma-2"
                color="yellow"
                text-color="white"
              >
                Report
              </v-chip>
            </div>
            <div v-else-if="post.type == 'accident'">
              <v-chip
                class="ma-2"
                color="red"
                text-color="white"
              >
                Accident
              </v-chip>
            </div>
            <div v-else>
                <v-chip
                class="ma-2"
                color="blue"
                text-color="white"
              >
                Progress
              </v-chip>
            </div>
          </v-list-item>
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
          <v-card-subtitle>
            <v-card-actions>
              <router-link style="text-decoration:none" :to="{name: 'timeline.comment',  params:{id: post.id}}">
                  <div>View all comments</div>
              </router-link>
            </v-card-actions>
          </v-card-subtitle>
          <v-card-actions>
            <div v-if="post.status == 'unsolved'">
              <v-btn
                class="ma-2 white--text"
                color="red"
                text
              >
                Unsolved
              </v-btn>
            </div>          
          </v-card-actions>
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
    this.getAllPostById(this.$route.params.id)
    
  },
  computed:{
    ...mapState('Post', {
      posts : state=>state.posts
    })
  },
  methods:{
    ...mapActions('Post', ['getAllPostById'])
  },
}
</script>