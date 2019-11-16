<template>
  <div>
    <v-card flat class="my-5 pa-3">
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <div class="caption grey--text">Name</div>
          <div v-text="aye"></div>
        </v-col>
        <v-col cols="4" md="2" lg="2">
          <div class="caption grey--text">Description</div>
          <div v-text="aye"></div>
        </v-col>
        <v-col cols="4" md="2" lg="2">
          <div class="caption grey--text">Start</div>
          <div v-text="aye"></div>
        </v-col>
        <v-col cols="4" md="2" lg="2">
          <div class="caption grey--text">End</div>
          <div v-text="aye"></div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  created(){
    this.getProjects()
  },
  computed:{
    ...mapActions('project',{
       projects : state=>state.projects
    })
  },
  methods:{
    ...mapActions('project',['getProjects'])
  }
}
</script>
