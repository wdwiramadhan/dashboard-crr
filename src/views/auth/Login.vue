<template>
  <div class="login">
    <v-container>
      <v-row justify="center" class="my-5">
        <v-col cols="12" md="4" lg="4">
          <v-card class="pa-5">
            <v-form>
              <v-text-field v-model="user.email" label="Email"></v-text-field>
              <v-text-field v-model="user.password" label="password" type="password"></v-text-field>
              <v-btn @click="login" class="primary" :disabled="loading" :loading="loading" >Login</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    user: {
      email: "",
      password: "",
      remember_me: false
    },
    loading : false
  }),
  created() {
    if (this.isLogedIn) {
      this.$router.push({ name: "home" })
    }
  },
  computed: {
    ...mapGetters(["isLogedIn"]),
    ...mapState(["errors"])
  },
  methods: {
    ...mapActions("Auth", ["submit"]),
    ...mapMutations(["CLEAR_ERRORS"]),
    login() {
      this.loading = true
      this.submit(this.user)
      .then(() => {
        this.loading = false
        if(this.isLogedIn){
        this.$router.push({name: 'timeline.project'})
        }
      })
    }
  }
};
</script>