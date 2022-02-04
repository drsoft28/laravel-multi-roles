<template>
  <v-card
    max-width="100%"
    class="mx-auto"
    :loading="loading"
    id="sub-menu-editor"
  >
    <v-row>
      <v-col md="12">
        <v-toolbar dense color="deep-white accent-4">
          <v-toolbar-title></v-toolbar-title>

          <v-btn color="primary" dark icon @click="reloadList">
            <v-icon>mdi-refresh</v-icon> 
          </v-btn>
          <v-btn :diasabled="!role_id" color="primary" dark icon @click="saveMenu">
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
            <v-btn color="primary" dark icon @click.stop="addChildItem()">
                <v-icon>mdi-clipboard-plus</v-icon>
              </v-btn>
        <!--dialog-->
        <EditDialog @storeItem="storeItem" @updateItem="updateItem" :groupe="groupe" :prefix_url="url" />
        </v-toolbar>
      </v-col>
      <v-col md="12">
        <v-list :expand="true">
          <draggable
            :onStart="onMoveCallback"
            :list="desserts"
            :group="{ name: 'g1' }"
          >
            <template v-for="cc in desserts">
              <v-list-group
                v-show="!cc.deleted"
                :key="cc.id"
                :prepend-icon="cc.icon"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-title>{{ cc.title }}</v-list-item-title>
                  <v-spacer />
                  <v-icon color="green" @click.stop="addChildItem(cc)"
                    >mdi-clipboard-plus</v-icon
                  >
                  <v-icon color="info" @click.stop="editItem(cc)"
                    >mdi-file-document-edit</v-icon
                  >
                  <v-icon color="primary" @click.stop="refreshMenu(cc)"
                    >mdi-refresh</v-icon
                  >
                  <v-icon color="red" @click.stop="deleteItem(cc,desserts)"
                    >mdi-trash-can</v-icon
                  >
                </template>

                <draggable
                  :key="cc.title"
                  :onStart="onMoveCallback"
                  :list="cc.children"
                  :group="{ name: 'g1' }"
                >
                  <!--LOOP1-->
                  <template v-for="mm in cc.children">
                    <v-list-group v-show="!cc.deleted" :key="mm.id" no-action>
                      <template v-slot:activator>
                        <v-list-item-content class="itemsq">
                          <v-list-item-title>{{ mm.title }}</v-list-item-title>
                        </v-list-item-content>
                        <v-spacer />
                        <v-icon color="green" @click.stop="addChildItem(mm)"
                          >mdi-clipboard-plus</v-icon
                        >
                        <v-icon color="info" @click.stop="editItem(mm)"
                          >mdi-file-document-edit</v-icon
                        >
                        <v-icon color="primary" @click.stop="refreshMenu(mm)"
                          >mdi-refresh</v-icon
                        >
                        <v-icon color="red" @click.stop="deleteItem(mm,cc.children)"
                          >mdi-trash-can</v-icon
                        >
                      </template>

                      <draggable
                        :onStart="onMoveCallback"
                        :list="mm.children"
                        :group="{ name: 'g1' }"
                      >
                        <!--#LOOP2-->
                        <template v-for="admin in mm.children">
                          <v-list-item
                            v-show="!cc.deleted"
                            :key="admin.id"
                            link
                          >
                            <v-list-item-title
                              v-text="admin.title"
                            ></v-list-item-title>
                            <v-spacer />
                            <v-icon
                              color="green"
                              @click.stop="addChildItem(admin)"
                              >mdi-clipboard-plus</v-icon
                            >
                            <v-icon color="info" @click.stop="editItem(admin)"
                              >mdi-file-document-edit</v-icon
                            >
                            <v-icon
                              color="primary"
                              @click.stop="refreshMenu(admin)"
                              >mdi-refresh</v-icon
                            >
                            <v-icon color="red" @click.stop="deleteItem(admin,mm.children)"
                              >mdi-trash-can</v-icon
                            >
                            <v-list-item-icon>
                              <v-icon v-text="admin.icon">{{
                                admin.icon
                              }}</v-icon>
                            </v-list-item-icon>
                          </v-list-item>
                        </template>
                        <!--#LOOP2-->
                        <template
                          v-if="!(mm.children && mm.children.length > 0)"
                        >
                          <div class="item-vide">
                            vide
                          </div>
                        </template>
                      </draggable>
                    </v-list-group>
                  </template>
                  <!--#LOOP1-->
                  <template v-if="!(cc.children && cc.children.length > 0)">
                    <div class="item-vide">
                      vide
                    </div>
                  </template>
                </draggable>
              </v-list-group>
            </template>
            <template> </template>
          </draggable>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import draggable from "vuedraggable";
import EditDialog from './edit-dialog.vue'

export default {
  props: {
    role_id:{
      type:Number,
      required:true,
    },
    groupe:{
      type:String,
      required:true,
    },
    prefix_url:{
      type:String,
      required:true,
    }
  },
  components: {
    draggable,
    EditDialog
  },
  data() {
    return {
      opt_tree:{
        field:'parent_id'
    },
      list: [],
      url:"roles/sidebars",
     
      main_menu: true,
      loading: false,
      isDeleted: false,
      editedIndex: -1,
      dialog: false,
      desserts:[],
      items:[],
      itemSelected: null,
      editedItem: {
              id: 0,
              permission: "*",
              title: "",
              parent_id: null,
              icon: "mdi-view-dashboard",
              link: "#",
              ordre: 0,
              deleted: false,
              iconOpen: "mdi-chevron-down",
              iconClose: "mdi-chevron-up",
              children: []
      },
      defaultItem: {
            id: 0,
            permission: "*",
            parent_id: null,
            title: "",
            icon: "mdi-view-dashboard",
            link: "#",
            ordre: 0,
            deleted: false,
            iconOpen: "mdi-chevron-down",
            iconClose: "mdi-chevron-up",
            children: []
      }
    };
  },
  watch: {
    role_id:{
      deep:true,
      immediate:true,
      handler(val){
      
        if(!val) this.desserts = [];
        else this.reloadList(false)
      }
    },
    dialog(val) {
      val || this.close();
    }
  },

  computed: {
    formTitle() {
      return this.editedItem.id > 0 ? "Edit Item" : "New Item";
    }
  },

  methods: {
     getChildren(list,parent,parent_id){
        let  _this =this;
        parent.children =[];
       let children = list.filter(x=>(parent_id===null && x[this.opt_tree.field]===null )|| (x[this.opt_tree.field]!==null && x[this.opt_tree.field].toString() === parent_id))
       children.forEach(e=>{
           _this.getChildren(list,e,e.id.toString())
           parent.children.push(e)
       })
    },
    storeItem(data){
       if (this.itemSelected != null) this.itemSelected.children.push(data)
       else this.desserts.push(data)
    },
    updateItem(data){
      console.log('update item')
      let _this=this
         Object.assign(this.itemSelected,data)
         Object.keys(this.itemSelected).forEach(key=>{
           if(data[key]===null ||data[key]===undefined)
           _this.itemSelected[key]=data[key]
         })
    },
     onSelect() {},
    onMoveCallback() {
      //console.log(evt, originalEvent);
      return true;
    },
    getComponentData(item) {
      return {
        attrs: {
          noAction: true,
          prependIcon: item.icon,
          title: "ddd"
        },
        props: {}
      };
    },
    refreshMenu() {},
    async reloadList(show_message=true) {
      this.desserts = [];
      try {
        let { data } = await this.$axios.post(`${this.url}`, {
          role_id: this.role_id
        });
       
       let list =data.data.list; 
       let elements =[];
       this.getChildren(list,elements,null)
       console.log('lt',elements.children)
       this.desserts =elements.children;
       if(show_message)
        window.Swal.fire({
          position: "top-end",
          icon: "success",
          title: "success loaded",
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {

        console.log(error)
      }
    },
    addChildItem(item) {
      this.editedIndex = -1;
      this.main_menu = false;
      this.itemSelected = item;
      let editedItem = Object.assign({}, this.defaultItem);
      if (item != null) editedItem.parent_id = item.id;
      editedItem.role_id = this.role_id;
      window.EventBus.fire(this.groupe+'-open-dialog',{
        item:editedItem,
        parent
      })
      //this.dialog = true;
    },
    editItem(item) {
      this.main_menu = false;
      this.editedIndex = item.id;
      this.itemSelected = item;
      let editedItem = Object.assign({}, item);
       editedItem.role_id = this.role_id;
      //editedItem.parent_id=item.parent_id
       window.EventBus.fire(this.groupe+'-open-dialog',{
        item:editedItem
      })
      //this.dialog = true;
    },

    deleteItem(item,parent) {
      let _this = this;
      var isDeleted = false;
      window.Swal.fire({
        title: " Do you want to delete item?",
        html: '<span class="mdi ' + item.icon + '">' + item.title + "</span>",

        showCancelButton: true,
        confirmButtonText: "Delete",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return this.$axios
            .post(`${this.url}/destroy`, {
              id: item.id,
              role_id: _this.role_id
            })
            .then(response => {
              if (!response.data.success) {
                if (response.data.type == "message")
                  throw new Error(response.data.data);
              }

              //  _this.roles.splice(index, 1)
              isDeleted = true;
              return response.data;
            })
            .catch(error => {
              window.Swal.showValidationMessage(`Request failed: ${error}`);
            });
        },
        allowOutsideClick: () => !window.Swal.isLoading()
      }).then(() => {
        if (isDeleted) {
          window.Swal.fire({
            title: "success deleted",
            type: "success"
          });
         // _this.reloadList();
             const index = parent.indexOf(item);
      parent.splice(index, 1);
        }
      });
      //  const index = this.desserts.indexOf(item)

      //  confirm('Are you sure you want to delete this item?') &&this.desserts.splice(index, 1)
    },
        savedSucces() {
      window.Swal.fire({
        position: "top-end",
        icon: "success",
        title: "success saved",
        showConfirmButton: false,
        timer: 1500
      });
    },
    async saveMenu() {
      try {
        let response = await this.$axios.post(`${this.url}/update-all`, {
          role_id: this.role_id,
          children:this.desserts
        });
        let data = response.data;
        let res_data = data.data; // data json
        let res_success = data.success;
        let res_type = data.type;
        if (res_success) {
          console.log("success response");
          //this.editedItem.id=res_data.id;
          this.savedSucces();
          // this.item.roles.push(res_data.role)
          //this.close()
        } else {
          console.log("success false");
          if (res_type == "validator") {
            console.log("error validator response");
            //this.$refs.form.setErrors(res_data);
          } else if (res_type == "message") {
            console.log("error message response");
            window.Swal.fire({
              position: "top-end",
              icon: "error",
              title: res_data,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      } catch (error) {
        console.log("error catch", error);
        console.log("response catch", error.response);
        this.axiosError(error);
      }
    }
  }
};
</script>
<style>
#sub-menu-editor .item-vide {
  border: 2px dashed red;
  height: 50px;
  background-color: #eee;
}
#sub-menu-editor .v-list-group__items {
  background-color: #eee;
  border: 2px dashed blue;
}
</style>
