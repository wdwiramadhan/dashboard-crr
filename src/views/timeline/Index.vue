<template>
  <div>
    <navbar-timeline></navbar-timeline>
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

