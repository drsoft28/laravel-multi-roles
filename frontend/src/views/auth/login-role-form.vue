<template>
  <v-card max-width="700" class="mx-auto">
      <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Sign in</v-toolbar-title>

      <v-spacer></v-spacer>

     
    </v-toolbar>
      <v-card-text>
          <ValidationObserver ref="form">
          <v-row>
              <v-col md="12">
                  <ValidationProvider
                  name="Role"
                                 vid="role_id"
                                 rules="required"
                   v-slot="{errors}">
                  <v-autocomplete
                  v-model="form.role_id"
                  label="Role"
                  error-count=1
                  :error="errors&& errors.length>0"
                  :error-messages="errors"
                  :items="roles"
                  item-value="id"
                  item-text="name"
                  >
                  </v-autocomplete>
                  </ValidationProvider>
              </v-col>
                   
          </v-row>
          </ValidationObserver>
      </v-card-text>
      <v-card-actions>
          <v-btn :disabled="processing" color="primary" @click="cancel">
              Cancel
          </v-btn>
          <v-spacer/>
          <v-btn :loading="processing" color="primary" @click="login">
              Sign in
          </v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props:{
        accessToken:{
            type:String,
            default:null,
        },
            roles:{
                type:[Array,Object],
                default:()=>{return []}
            }
    },
data :()=>({
    processing:false,
    form:{
        role_id:null,
        
    }
}),
methods:{
    cancel(){
        this.$emit('cancel')
    },
    async login(){
        this.processing = true;
        let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            this.processing = false;
            return ;
        }
        let  config = {
              headers:{
                 Authorization : `Bearer ${this.accessToken}`
                 }
          }
        try {
            let {data} = await this.axios.post('auth/login-role',this.form,config);
            if(data.success){
                let token = data.data.access_token;
                
                let user = data.data.user;
                window.store.commit('auth/SET_TOKEN',token) ;
                  window.store.commit('auth/SET_USER',user);
                  window.store.commit('auth/SET_ROLES',this.roles);
                  window.store.commit('auth/SET_SIDEBAR',data.data.sidebar);
                  window.store.commit('auth/SET_ROLE',this.roles.find(r=>r.id==this.form.role_id).name);
                  this.$router.push('/dashboard')
            }else{
                if(data.type=='validator')
                this.$refs.form.setErrors(data.data);
                if(data.type=='message'){
                    console.log('Message error',data.data)
                    alert(data.data)
                }
            }
        } catch (error) {
            console.log('error',error)
        }
        this.processing = false;
    }
}
}
</script>

<style>

</style>