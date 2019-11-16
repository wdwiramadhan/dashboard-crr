<template>
  <v-app>
    <navbar></navbar>
    <router-view></router-view>
  </v-app>
</template>
<script>
import Navbar from '../../components/Navbar'
import { mapState, mapGetters} from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapState(["token"]),
    ...mapGetters(['isLogedIn'])
  },
  data: () => ({
    //
  }),
  components:{
    'navbar' : Navbar
  }
};
</script>
