<template>
     <v-list>
         <template v-for="cc in menu" >
           <v-list-item v-if="!cc.children || cc.children.length==0" :key="cc.id"   link
             :to="cc.link">
        <v-list-item-icon>
          <v-icon>{{cc.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-title style="text-align: start;">{{title_trl(cc)}}</v-list-item-title>
      </v-list-item>
             <v-list-group v-else  :key="cc.id" :prepend-icon="cc.icon"   no-action >
        <template v-slot:activator>
          <v-list-item-title style="text-align: start;">{{title_trl(cc)}}</v-list-item-title>
        </template>
<template  v-for="mm in cc.children" >
  <v-list-group v-if="mm.children && mm.children.length>0" :key="mm.id"   no-action sub-group >
          <template  v-slot:activator>
            <v-list-item-title style="text-align: start;">{{title_trl(mm)}}</v-list-item-title>
          </template>
          <template  v-for="kk in mm.children" >
            <v-list-item  v-if="!kk.children || kk.children.length<=0"
              :key="kk.id"
              link
              :to="kk.link"
            >
              <v-list-item-title style="text-align: start;">{{title_trl(kk)}}</v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text="kk.icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-group v-else  :key="kk.id"  no-action sub-group  >
                    <template v-slot:activator>
                      <v-list-item-content style="text-align: start;">
                        <v-list-item-title>{{title_trl(kk)}}</v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item
                      v-for="(admin) in kk.children"
                      :key="admin.id"
                      link
                      :to="admin.link"

                    >
                      <v-list-item-title style="text-align: start;">{{title_trl(admin)}}</v-list-item-title>
                      <v-list-item-icon>
                        <v-icon v-text="admin.icon"></v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list-group>

        </template>
        </v-list-group>
 <v-list-item v-else  :key="mm.id"   link
            :to="mm.link" >

            <v-list-item-title style="text-align: start;">{{title_trl(mm)}}</v-list-item-title>
           <v-list-item-icon>
              <v-icon v-text="mm.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
  </template>

      </v-list-group>

           </template>
      </v-list>
</template>
<script>
export default {
  name:'sidebar2',
    props:['menu'],
    watch:{
      menu:{
        deep:true,
        immediate:true,
        handler(){
          //console.log('watch men',val)
        }
      }
    },
    methods:{
      title_trl(item){
      
       return item.title
  
      }
    }
}
</script>