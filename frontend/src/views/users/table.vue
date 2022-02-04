<template>
<v-row>
  <v-col md="12">
  <v-data-table
  v-model="selected"
  :single-select="true"
    item-key="id"
    show-select
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Users</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
       <v-btn 
         class="mx-2"
      fab
      dark
      x-small
         color="primary" 
          @click="initialize">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
        <v-btn  
         class="mx-2"
      fab
      dark
      x-small
        color="primary" 
          @click="newItem">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
            <EditDialog @store="storeItem" @update="updateItem" :url="url" @close="closeDialog" v-if="dialog" :dialog.sync="dialog" :editedItem="editedItem" />
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  </v-col>
  <v-col md="12">
    <v-card>
    <v-tabs
      v-model="tab"
    
      
      
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Roles
        
      </v-tab>

     
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
       
        :value="'tab-1'"
      >
        <v-card flat>
          <v-card-text>

            <TabRole v-if="selected.length==1" :parent-item="selected[0]" /> 
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </v-col>
</v-row>
</template>
<script>
import EditDialog from './dialog.vue'
import TabRole from './tabs/roles/index.vue'
  export default {
      components:{
        EditDialog,
        TabRole
      },
    data: () => ({
      tab:0,
      selected:[],
        url:'users',
      dialog: false,
      dialogDelete: false,
      headers: [
         {  text: 'ID', value: 'id' },
        {
          text: 'name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
       
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        id: 0,
    
      },
      defaultItem: {
        name: '',
       id:null,
      },
    }),

 

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
        updateItem(item){
             
                 let obj = this.desserts.find(x=>x.id==item.id);
                 let index = this.desserts.indexOf(obj);
          Object.assign(this.desserts[index], item)
       
        },
        storeItem(item){
 this.desserts.push(item)
        },
    async  initialize () {
        try {
            let {data} = await this.$axios.post(this.url)
            if(data.success){
                this.desserts = data.data.list
            }
        } catch (error) {
        console.log(error) 
        }
       
      },
closeDialog(){
    this.dialog =false;
 this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
},
 newItem () {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.dialog = true
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

     async deleteItem (item) {
        
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

    async  deleteItemConfirm () {
           try {
             let {data} = await this.$axios.post(`${this.url}/destroy`, this.editedItem)
             if(data.success){
                this.desserts.splice(this.editedIndex, 1)
         window.Toast.fire({icon: 'success', title: data.data })  
             }else{
                 if(data.type=='message'){
                   window.Toast.fire({icon: 'error', title: data.data })  
                 }
             }
         } catch (error) {
             //
         }
         this.closeDelete()
      },

     

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

    
    },
  }
</script>