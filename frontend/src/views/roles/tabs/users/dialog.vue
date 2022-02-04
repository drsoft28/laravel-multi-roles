<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <ValidationObserver ref="form">
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <ValidationProvider 
              v-slot="{errors}"
              vid="user_id"
              name="user">
              <v-autocomplete
                v-model="item.user_id"
                label="user"
                :items="users"
                item-text="name"
                item-value="id"
                :error-count=1
                :error-messages="errors"
                :error="errors && errors.length>0"
              ></v-autocomplete>
              </ValidationProvider>
            </v-col>
          </v-row>
          </ValidationObserver>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      require: true,
    },
    dialog: {
      type: Boolean,
      default: false,
    },
    editedItem: {
      type: [Array, Object],
      require: true,
    },
  },
  data: () => ({
    dialog_local: false,
    users: [],
    item: { id: null, user_id: null,role_id:null },
  }),
  computed: {
    formTitle() {
      return this.item.id ? "Edit Item" : "New Item";
    },
  },
  mounted() {
    console.log('dialog mounted')
    this.initialize();
  },
  methods: {
    async initialize() {
      try {
        let { data } = await this.$axios.post("users/list-only");
        if (data.success) {
          this.users = data.data;
        }
      } catch (error) {
        console.log("error");
      }

      
    },
    async save() {
      let suffix = "store";
      if (this.item.id) suffix = "update";
      try {
        let { data } = await this.$axios.post(
          `${this.url}/${suffix}`,
          this.item
        );
        if (data.success) {
          this.$emit(suffix, data.data);
          this.close();
        }else{
          if(data.type=='validator')
          this.$refs.form.setErrors(data.data)
        }
      } catch (error) {
        console.log("error");
      }

      
    },
    close() {
      this.$emit("close");
    },
  },
  watch: {
    editedItem: {
      immediate: true,
      handler(val) {
        this.item = Object.assign({}, val);
      },
    },
    dialog(val) {
      this.dialog_local = val;
  
    },
  },
};
</script>

<style>
</style>