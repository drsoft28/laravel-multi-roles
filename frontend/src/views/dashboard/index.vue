<template>
  <div class="Dashboard">
    <h1>This is a Dashboard page</h1>
    <v-btn color="primary" @click="getRole">get Your role from server</v-btn>

  </div>
</template>
<script>

export default {
methods:{
  async getRole(){
    try {
      let {data} = await this.$axios.post('auth/me/role');
      if(data.success){
        window.Swal.fire({icon:'success',title:'success',html:data.data})
      }
    } catch (error) {
      //
    }
  }
}
}
</script>
