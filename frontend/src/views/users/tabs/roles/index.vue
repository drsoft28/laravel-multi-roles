<template>
  <v-card>
      <DTable :parent-item="parentItem">
      </DTable>
  </v-card>
</template>

<script>
import DTable from './table.vue'
export default {
    components:{
DTable
    },
    props:{
        parentItem:{
            type:[Array,Object],
            require:true
        }
    },
    watch:{
        parentItem:{
            deep:true,
            immediate:true,
            handler(){
//
            }
        }
    }

}
</script>

<style>

</style>