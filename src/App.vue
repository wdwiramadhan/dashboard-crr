<template>
  <v-app>
    <v-content>
      <router-view></router-view>

    </v-content>
  </v-app>
</template>
<script>
import { mapState, mapGetters} from 'vuex'
export default {
  name: 'App',
  created(){
    this.$router.push({name: 'timeline.project'})
  },
  computed:{
    ...mapState(["token"]),
    ...mapGetters(['isLogedIn'])
  },
  data: () => ({
    //
  }),
};
</script>
