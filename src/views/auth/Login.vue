<template>
  <div class="login">
    <v-container>
      <v-row justify="center" class="my-5">
        <v-col cols="12" md="4" lg="4" >
          <v-card class="pa-5">
            <v-form>
              <v-text-field v-model="user.email" label="Email"></v-text-field>
              <v-text-field
                v-model="user.password"
                label="password"
                type="password"
              ></v-text-field>
              <v-btn @click="login" class="primary">Login</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
  data: () => ({
    user:{
      email: '',
      password: '',
      remember_me: false
    }
  }),
  computed: {
    ...mapGetters(["isAuth"]), 
    ...mapState(["errors"])
  },
  methods:{
    ...mapActions("Auth", ["submit"]), //MENGISIASI FUNGSI submit() DARI VUEX AGAR DAPAT DIGUNAKAN PADA COMPONENT TERKAIT. submit() BERASAL DARI ACTION PADA FOLDER STORES/auth.js
    ...mapMutations(["CLEAR_ERRORS"]),
    login(){
      this.submit(this.user).then(() => {
        if(this.isAuth){
          this.CLEAR_ERRORS()
          this.$router.push({name: 'home'})
        }
      })
    }
  }
}
</script>