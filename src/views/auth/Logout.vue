<template>
  <div>logout</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods:{
      ...mapActions('Auth',['logout']),
    onLogout(){
      this.logout().then(() => {
        this.$router.push({name: 'home'})
      })
    }
  },
  created () {
    this.onLogout()
  },
}
</script>