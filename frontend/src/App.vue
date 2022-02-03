<template>
<component :is="$route.meta&&$route.meta.layout?$route.meta.layout:'div'">
      <router-view/>
  
</component>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
