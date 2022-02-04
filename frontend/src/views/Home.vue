<template>
<v-container fuild>
  <LoginForm />
</v-container>
</template>

<script>
  import LoginForm from './auth/login.vue'

  export default {
    name: 'Home',

    components: {
      LoginForm,
    },
  }
</script>
