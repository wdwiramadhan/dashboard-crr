<template>
  <div>
    <navbar-timeline></navbar-timeline>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from '../../components/NavbarTimeline'
export default {
  components:{
  'navbar-timeline': Navbar
  }
}
</script>

