<template>
  <v-app>
    <navbar v-if="isLogedIn"></navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import { mapState, mapGetters} from 'vuex'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  computed:{
    ...mapState(["token"]),
    ...mapGetters(['isLogedIn'])
  },
  components:{
    'navbar' : Navbar
  },
  data: () => ({
    //
  }),
};
</script>
