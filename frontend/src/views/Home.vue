<template>
<v-container fuild>
  <LoginForm />
</v-container>
</template>

<script>
  import LoginForm from './auth/login-form.vue'

  export default {
    name: 'Home',

    components: {
      LoginForm,
    },
  }
</script>
