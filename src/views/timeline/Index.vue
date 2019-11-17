<template>
  <div>
    <navbar-timeline v-if="$route.name !== 'timeline.comment' && $route.name !== 'timeline.createpost'" ></navbar-timeline>
    <router-view></router-view>
    <bottom-navigation></bottom-navigation>
  </div>
</template>
<script>
import Navbar from '../../components/NavbarTimeline'
import BottomNavigation from  '../../components/BottomNavigation'
export default {
  components:{
  'navbar-timeline': Navbar,
  'bottom-navigation' : BottomNavigation
  }
}
</script>

