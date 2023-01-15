<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app class="blue-grey lighten-5">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            My Friends
          </v-list-item-title>
          <v-list-item-subtitle>
            Users info
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  
      <v-app-bar app class="blue-grey lighten-4">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
        <v-toolbar-title>  My Friends</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script>
    export default {
        data () {
      return {
        items: [
          { title: 'Users List', icon: 'mdi-view-dashboard',to:"/" },
          { title: 'Ùser data', icon: 'mdi-account-circle',to:"/data" },
        ],
        drawer: null,
      }
    },
    }
  </script>