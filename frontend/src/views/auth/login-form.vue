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
                  name="Email"
                                 vid="email"
                                 rules="required|email"
                   v-slot="{errors}">
                  <v-text-field
                  v-model="form.email"
                  label="Email"
                  error-count=1
                  :error="errors&& errors.length>0"
                  :error-messages="errors"
                  >
                  </v-text-field>
                  </ValidationProvider>
              </v-col>
                            <v-col md="12">
                                 <ValidationProvider
                                 name="password"
                                 vid="password"
                                 rules="required"
                                  v-slot="{errors}">
                  <v-text-field
                  type="password"
                  v-model="form.password"
                  label="Password"
                  error-count=1
                  :error="errors&& errors.length>0"
                  :error-messages="errors"
                  >
                  </v-text-field>
                                 </ValidationProvider>
              </v-col>
          </v-row>
          </ValidationObserver>
      </v-card-text>
      <v-card-actions>
          <v-spacer/>
          <v-btn :loading="processing" color="primary" @click="login">
              Sign in
          </v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
export default {
data :()=>({
    processing:false,
    form:{
        email:null,
        password:null,
    }
}),
methods:{
    async login(){
        this.processing = true;
        let valid = await this.$refs.form.validate();
        if(!valid){
            console.log('form invalid');
            this.processing = false;
            return ;
        }
        try {
            let {data} = await this.axios.post('auth/login',this.form);
            if(data.success){
                let token = data.data.access_token;
                
                let user = data.data.user;
                window.store.commit('auth/SET_TOKEN',token) ;
                  window.store.commit('auth/SET_USER',user);
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
            console.log(error)
        }
        this.processing = false;
    }
}
}
</script>

<style>

</style>