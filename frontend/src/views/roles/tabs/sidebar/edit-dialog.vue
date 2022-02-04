<template>
    <v-dialog v-model="dialog" max-width="500px">
          
            <v-card v-if="dialog">
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <ValidationObserver ref="form">
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <ValidationProvider
                          vid="title"
                          rules="required"
                          name="title"
                          v-slot="{ errors }"
                        >
                          <v-text-field
                            v-model="editedItem.title"
                            :error="errors != null && errors.length > 0"
                            error-count="1"
                            :error-messages="errors"
                            label="title"
                          />
                        </ValidationProvider>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <ValidationProvider
                          vid="link"
                          rules="required"
                          name="link"
                          v-slot="{ errors }"
                        >
                          <v-combobox
                            v-model="editedItem.link"
                            persistent-hint
                            :no-data-text="editedItem.link"
                            :hint="editedItem.link"
                            :return-object="false"
                            :items="router_list"
                            item-text="path"
                            item-value="path"
                            :error="errors != null && errors.length > 0"
                            error-count="1"
                            :error-messages="errors"
                            label="link"
                            @change="changeLink"
                          />
                        </ValidationProvider>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <ValidationProvider
                          vid="icon"
                          rules="required"
                          name="icon"
                          v-slot="{ errors }"
                        >
                          <v-text-field
                            :prepend-icon="editedItem.icon"
                            v-model="editedItem.icon"
                            :error="errors != null && errors.length > 0"
                            error-count="1"
                            dense
                            :error-messages="errors"
                            label="icon"
                          />
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                  </ValidationObserver>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :color="`primary darken-1`" text @click="close">{{
                  cancel
                }}</v-btn>
                <v-btn :color="`primary darken-1`" text @click="save">{{
                  "save"
                }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
</template>

<script>
export default {
    props:{
        groupe:{
            type:String,
            required:true,
        },
        prefix_url:{
            type:String,
            required:true,
        }
    },
    data:()=>({
        editedItem:{

        },
        dialog:false,
         router_list: [{ name: "#", path: "#" }],
    }),
methods:{
  changeLink(path){
      if(path){
       let d= this.router_list.find(x=>x.path==path);
       if(d && d.meta && !this.editedItem.title)
       this.editedItem.title = d.meta.breadcrumb
      }
  },
       getAllRoutes() {
      let _this = this;
      this.router_list = [{ name: "#", path: "#" }]
        this.$router.options.routes.forEach(route => {
          if (!Object.hasOwnProperty.call(route,"redirect"))
            _this.router_list.push({
              meta: route.meta,
              name: route.path,
              path: route.path
            });
          //  console.log(route)
          if (Object.hasOwnProperty.call(route,"children"))
            _this.getforRoute(route.children, route.path);
        });
    },
        getforRoute(children, path) {
      let _this = this;
      children.forEach(route => {
        if (!Object.hasOwnProperty.call(route,"redirect"))
          _this.router_list.push({
            name: path + "/" + route.path,
            path: path + "/" + route.path
          });
        if (Object.hasOwnProperty.call(route,"children"))
          _this.getforRoute(route.children, path + "/" + route.path);
      });
    },
     close() {
      this.dialog = false;
    },

    async save() {
      console.log("save action");
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log("form not valide");
        return;
      }

      if (this.editedItem.id > 0) {
        //update
        console.log("call update action");
        await this.updateItem();
      } else {
        //store
        console.log("call store action");
        await this.storeItem();
      }
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
    async updateItem() {
      try {
        var data_send = Object.assign({}, this.editedItem);
        //data_send.menu_id = this.menu.id;
        let {data} = await this.$axios.post(
          `${this.prefix_url}/update`,
          data_send
        );
    
        if (data.success) {
         this.$emit('updateItem',data.data)

          this.close();
        } else {
          console.log("success false");
          window._responseBehaviors.notSuccess(this,data,this.$refs.form)
        }
      } catch (error) {
        console.log("error catch", error);
        console.log("response catch", error.response);
        this.axiosError(error);
      }
    },
    async storeItem() {
      console.log("storing item");
      try {
        //var parent_id = null;
       // if (this.itemSelected != null) parent_id = this.itemSelected.id;
        var data_send = Object.assign({}, this.editedItem);
        //data_send.menu_id = this.menu.id;
       // data_send.parent_id = parent_id;
        let {data} = await this.$axios.post(`${this.prefix_url}/store`,data_send);
      
        if (data.success) {

            this.$emit('storeItem',data.data)
            /*
          console.log("success response");
          var dd = Object.assign({}, this.editedItem);
          dd.parent_id = res_data.parent_id;
          this.savedSucces();
          if (this.itemSelected != null) this.itemSelected.children.push(dd);
          */
          this.close();
        } else {
          console.log("success false");
       window._responseBehaviors.notSuccess(this,data,this.$refs.form)
         
        }
      } catch (error) {
        console.log("error catch", error);
        console.log("response catch", error.response);
        this.axiosError(error);
      }
    },
    handlerItem(data){
            this.editedItem = Object.assign({},data.item);
            this.dialog = true;
    },
},
beforeDestroy(){
 window.EventBus.off(this.groupe+'-open-dialog',this.handlerItem)
},
beforeMount(){
    window.EventBus.listen(this.groupe+'-open-dialog',this.handlerItem)
},
mounted(){
this.getAllRoutes()
},
 computed: {
    formTitle() {
      return this.editedItem.id > 0 ? "Edit Item" : "New Item";
    }
  },
}
</script>

<style>

</style>