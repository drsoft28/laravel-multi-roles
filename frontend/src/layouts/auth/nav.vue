<template>
    <v-navigation-drawer
      v-model="drawer_local"
      app
    >
       <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider/>
        <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider/>
       <v-list nav dense>
           <v-list-item @click="logout">
<v-list-item-icon>
            <v-icon >mdi-power</v-icon>
          </v-list-item-icon>
           <v-list-item-content>
        <v-list-item-title>logout</v-list-item-title>
      </v-list-item-content>
           </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:{
        drawer:{
            top:Boolean,
            default:true,
        }
    },
    data:()=>({
        drawer_local:true,
         selectedItem: 0,
      items: [
        { text: 'Home', icon: 'mdi-home' },
        { text: 'Profil', icon: 'mdi-account' },
         { text: 'Settings', icon: 'mdi-cog' },
      ],
    }),
    methods:{
       async logout(){
           try {
               await this.$axios.post('auth/logout')
               window.store.commit('auth/CLEAR_AUTH')
               this.$router.push('/')
           } catch (error) {
               window.store.commit('auth/CLEAR_AUTH')
               this.$router.push('/')
           } 
        }
    },
    watch:{
        drawer_local(){
            this.$emit('update:drawer',this.drawer_local)
        },
        drawer(val){
            this.drawer_local=val
        }
    }

}
</script>

<style>

</style>