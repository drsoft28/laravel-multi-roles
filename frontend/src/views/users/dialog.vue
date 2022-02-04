<template>
     <v-dialog
          v-model="dialog"
          max-width="500px"
        >
         
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="item.name"
                      label="name"
                    ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>

<script>
export default {
props:{
    url:{
        type:String,
        require:true,
    },
    dialog:{
        type:Boolean,
        default:false,
    },
    editedItem:{
        type:[Array,Object],
        require:true,
    }
},
data:()=>({
    dialog_local:false,
    item:{id:null,name:null},
}),
   computed: {
      formTitle () {
        return this.item.id ? 'Edit Item' : 'New Item'
      },
    },
methods:{
    async  save () {
          let suffix ='store';
          if(this.item.id) suffix ='update';
          try {
              let {data} = await this.$axios.post(`${this.url}/${suffix}`,this.item)
              if(data.success){
                  
                  this.$emit(suffix,data.data)
                 
              }
          } catch (error) {
              console.log('error')
          }
       
        this.close()
      },
 close () {
        this.$emit('close')
       
      },
},
watch:{
    editedItem:{
        immediate:true,
        handler(val){
           this.item= Object.assign({},val)
        }
    },
    dialog(val){
        this.dialog_local = val;
    }
}
}
</script>

<style>

</style>