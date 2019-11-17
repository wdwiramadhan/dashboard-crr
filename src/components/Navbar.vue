<template>
  <nav>
    <v-app-bar flat app dark color="deep purple">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>
          Constraction Realtime Report
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn :to="{name: 'logout'}" text>
          <span>Logout</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-app-bar>
     <v-navigation-drawer
      class="primary"
      v-model="drawer"
      app
      >
      <v-row>
        <v-col cols="12" sm="12" justify="center" align="center">
          <v-avatar
            class="profile center--text mt-5"
            color="grey"
            size="150"
          >
            <v-img src="../assets/profile.jpg"></v-img>
          </v-avatar>
          <div class="white--text mt-3">Wahyu Dr</div>
        </v-col>
      </v-row>
      <v-list shaped>
        <v-list-item-group>
          <v-list-item
            v-for="menu in menus" 
            :key="menu.title"
            :to="menu.route"
          >
            <v-list-item-icon>
              <v-icon v-text="menu.icon" class="white--text"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="menu.title" class="white--text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data(){
    return{
      drawer: false,
      menus:[
        {title:'Dashboard', icon: 'mdi-view-dashboard', route:'/dashboard/home'},
        {title:'My Projects', icon:'mdi-folder', route:'/dashboard/project'},
        {title:'Team', icon:'mdi-account-multiple', route:'/dashboard/team'},
      ]
    }
  }
}
</script>