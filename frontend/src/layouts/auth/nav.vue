<template>
  <v-navigation-drawer v-model="drawer_local" app>
    <v-list >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item v-if="user" link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ user.name }} 
          </v-list-item-title>
          <v-list-item-subtitle>{{ user_role_name }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list v-if="false" nav dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <Sidebar v-if="role_sidebar.length>0" :menu="role_sidebar" />
    <v-divider />
    <v-list nav dense>
      <v-list-item @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-power</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Sidebar from './sidebar.vue'
export default {
  props: {
    drawer: {
      top: Boolean,
      default: true,
    },
  },
  components:{
Sidebar
  },
  data: () => ({
    drawer_local: true,
    selectedItem: 0,
    items: [
      { text: "Home", icon: "mdi-home", link: "/dashboard" },
      { text: "Profil", icon: "mdi-account", link: "/profil" },
      { text: "Settings", icon: "mdi-cog", link: "/settings" },
      { text: "Roles", icon: "mdi-police-badge", link: "/roles" },
      { text: "Users", icon: "mdi-account-group", link: "/users" },
    ],
  }),
  methods: {
    resolveAfter2Seconds() {
      return new Promise((resolve) => {
        window.store.commit("auth/CLEAR_AUTH");
        resolve();
      });
    },
    async logout() {
      try {
        await this.$axios.post("auth/logout");
         window.store.commit("auth/CLEAR_AUTH");
      } catch (error) {
         window.store.commit("auth/CLEAR_AUTH");
      }
    },
  },
  watch: {
    user:{
      deep:true,
      immediate:true,
      handler(val){
          if(!val) this.$router.push('/login')
      }
    },
    drawer_local() {
      this.$emit("update:drawer", this.drawer_local);
    },
    drawer(val) {
      this.drawer_local = val;
    },
  },
};
</script>

<style>
</style>