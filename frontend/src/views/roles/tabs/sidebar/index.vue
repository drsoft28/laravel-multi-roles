<template>
  <nestedS   :prefix_url="url" :role_id="parentItem.id" :groupe="group"  />
</template>

<script>

import nestedS from './sidebar.vue'
export default {
      props:{
            group:{
              type:String,
              default:'tree'
          },
          url:{
              type:String,
              default:'roles/sidebars'
          },
    parentItem: {
      type: [Array, Object],
      default: () => ({
        
      })
    }
  },
    components:{
       
        nestedS
    }

}
</script>

<style>

</style>