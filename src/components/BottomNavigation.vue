<template>
  <v-bottom-navigation
     fixed :value="e31"
    color="deep-purple accent-4"
    class="pa-4"
    text
  >
    <router-link if style="text-decoration:none" :to="{name: 'timeline.project'}">
      <v-btn>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>
    </router-link>
    <div v-if="$route.name === 'timeline.project'">
      <router-link style="text-decoration:none"  :to="{name: 'timeline.project'}">
        <v-btn>
        <v-icon>mdi-plus-box-outline</v-icon>
      </v-btn>
      </router-link>
    </div>
    <div v-else>
      <router-link style="text-decoration:none"  :to="{name: 'timeline.createpost', params: this.$route.params.id}">
        <v-btn>
        <v-icon>mdi-plus-box-outline</v-icon>
      </v-btn>
      </router-link>
    </div>
    <router-link style="text-decoration:none" :to="{name: 'timeline.createpost'}">
    <v-btn>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    </router-link>
  </v-bottom-navigation>
</template>
<script>
export default {
  data () {
    return {
      e3: 0,
      e31: true
    }
  }
}
</script>