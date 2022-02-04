<template>
  <v-card flat>
      <LoginForm v-if="!access_token"  @login="logined"/>
      <login-role v-else  :access-token="access_token" :roles="roles" @cancel="access_token=null" />
  </v-card>
</template>

<script>
import LoginForm from './login-form.vue'
import LoginRole from './login-role-form.vue'
export default {
components:{
    LoginForm,
    LoginRole
},
data:()=>({
    access_token:null,
    roles:[]
}),
methods:{
    logined(data){
        this.roles=data.roles;
        this.access_token=data.access_token;
    }
}
}
</script>

<style>

</style>