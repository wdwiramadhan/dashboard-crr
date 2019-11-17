<template>
  <div>
    <nav>
      <v-app-bar class="deep-purple mb-5">
      <router-link style="text-decoration:none" :to="{name : 'timeline.project'}">
        <v-icon color="white">mdi-arrow-left</v-icon>
      </router-link>
      <v-toolbar-title class="white--text ml-2">Comments</v-toolbar-title>
    </v-app-bar>  
    </nav>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            class="mx-auto mb-5"
          >
             <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>aye</v-list-item-title>
                <v-list-item-subtitle >aye</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-subtitle>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sunt perferendis aspernatur nulla reprehenderit, alias tempore, maiores earum cum officia ratione illo deleniti hic, explicabo voluptatibus amet labore ab dolor?</div>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  
}
</script>