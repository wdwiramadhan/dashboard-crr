<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">                     
          <v-card
          class="mx-auto mb-5"
          max-width="900px"
          v-for="project in projects.data" :key="project.id"
          >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <v-card-title>
            <div v-text="project.title"></div>
          </v-card-title>
          <v-card-subtitle>
            <div v-text="project.description"></div>
          </v-card-subtitle>  
          <v-card-subtitle>
            <v-card-actions>
              <router-link style="text-decoration:none" :to="{name: 'timeline.post',  params:{id: project.id}}">
                  <div>View all post</div>
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
    this.getProjects()
  },
  computed:{
    ...mapState('Project', {
      projects : state=>state.projects
    })
  },
  methods:{
    ...mapActions('Project', ['getProjects'])
  },
}
</script>