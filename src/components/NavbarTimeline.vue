<template>
  <nav>
    <v-app-bar class="deep-purple mb-5">
      <div v-if="$route.name !== 'timeline.project'">
        <router-link style="text-decoration:none" :to="{name : 'timeline.project'}">
          <v-icon color="white">mdi-arrow-left</v-icon>
        </router-link>
      </div>
      <div v-else>
        <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon>
      </div>
      <v-toolbar-title class="white--text ml-2">CRR</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon class="white--text">mdi-bell-outline</v-icon>
    </v-app-bar>    
  </nav>
</template>
