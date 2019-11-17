<template>
  <div>
    <nav>
      <v-app-bar class="deep-purple mb-5">
      <router-link style="text-decoration:none" :to="{name : 'timeline.post', params: this.$route.params.id}">
        <v-icon color="white">mdi-arrow-left</v-icon>
       </router-link>
        <v-toolbar-title class="white--text ml-2">Create Post</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="white--text ml-2">
        <v-btn text class="white--text" @click="submit">Post</v-btn>
      </v-toolbar-title>
    </v-app-bar>  
    </nav>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-5">
            <v-form>
              <v-text-field v-model="post.title" label="Title"></v-text-field>
              <v-text-field v-model="post.description" label="Description"></v-text-field> 
              <v-text-field v-model="post.type" label="Type"></v-text-field >         
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data: () =>({
    post:{
      title: '',
      description: '',
      type: '',
    }
  }),
  methods:{
    ...mapActions('Post',['addPost']),
    submit(){
      let form = new FormData()
      form.append('project_id' , this.$route.params.id)
      form.append('user_id' , 2)
      form.append('title', this.post.title)
      form.append('description', this.post.description)
      form.append('photo_id', 0)
      form.append('type', this.post.type)
      form.append('status','unsolved')
      this.addPost(form).then(() => {
       this.post = {
          project_id : '',
          user_id : '',
          title : '',
          description : '',
          photo_id : '',
          type : '',
          status : '',
        },
        this.$router.push({ name: 'timeline.post', params: this.$route.params.id})
      })
    }
  }
}
</script>