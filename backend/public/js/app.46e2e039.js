(function(t){function e(e){for(var r,a,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d0a481e":"3cec286e","chunk-2d0e5357":"282245ac","chunk-2d2306d2":"6b78f8b6","chunk-6487723d":"d6636e94","chunk-1d6e89ac":"eaecc1dd","chunk-2d0c0e38":"f675a4ce"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-6487723d":1,"chunk-1d6e89ac":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0a481e":"31d6cfe0","chunk-2d0e5357":"31d6cfe0","chunk-2d2306d2":"31d6cfe0","chunk-6487723d":"33bcce0c","chunk-1d6e89ac":"562e7255","chunk-2d0c0e38":"31d6cfe0"}[t]+".css",o=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],m.parentNode.removeChild(m),n(i)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.$route.meta&&t.$route.meta.layout?t.$route.meta.layout:"div",{tag:"component"},[n("router-view")],1)},o=[],i={name:"App",data:function(){return{}}},s=i,l=n("2877"),c=Object(l["a"])(s,a,o,!1,null,null,null),u=c.exports,d=n("d4ec"),m=n("bee2"),f=(n("99af"),function(){function t(){Object(d["a"])(this,t),this.bus=new r["a"]}return Object(m["a"])(t,[{key:"fire",value:function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.wrapper(t,(function(){var n;return(n=e.bus).$emit.apply(n,[t].concat(r))}),(function(n){var a;return(a=e.bus).$emit.apply(a,[t[n]].concat(r))}))}},{key:"listen",value:function(t,e){var n=this;this.wrapper(t,(function(){return n.bus.$on(t,e)}),(function(r){return n.bus.$on(t[r],e)}))}},{key:"off",value:function(t,e){var n=this;this.wrapper(t,(function(){return n.bus.$off(t,e)}),(function(r){return n.bus.$off(t[r],e)}))}},{key:"wrapper",value:function(t,e,n){if(Array.isArray(t))for(var r in t)n(r);else e()}}]),t}());n("b0c0");function p(t,e,n){t.show_sheet=!0,t.message_sheet=e,t.color_sheet=n}var v=function(){function t(){Object(d["a"])(this,t)}return Object(m["a"])(t,[{key:"redirectTo",value:function(t){var e=t.name,n=t.params;this.$router.push({name:e,params:n})}},{key:"validateForm",value:function(t,e){t.setErrors(e)}},{key:"showMessageDialog",value:function(t){var e,n=t.icon?t.icon:"warning",r=t.title?t.title:"warning";window.Swal.fire({icon:n,title:r,html:null!==(e=t.data)&&void 0!==e?e:t.html})}},{key:"showNotification",value:function(t){"toast"==t.type?window.Swal.fire({icon:t.icon,title:t.title,showConfirmButton:!1,position:"top-end",timer:1e3}):window.Swal.fire({icon:t.icon,title:t.title,html:t.message})}},{key:"showMessage",value:function(t,e,n){window.Swal.fire({title:t,text:e,icon:n})}},{key:"withSuccess",value:function(t,e){t.event&&window.EventBus.fire(e+t.event.name,t.event.data),"notification"==t.type&&this.showNotification(t.notification),"dialog"==t.type&&this.showMessageDialog(t.dialog),"message_bottom_sheet"==t.type&&p(this,t.message,t.color),"redirect"==t.type&&this.redirectTo(t.url)}},{key:"notSuccess",value:function(t,e,n){"validator"==e.type&&n.setErrors(e.data),"redirect"==e.type&&this.redirectTo(e.data),"notification"==e.type&&this.showNotification(e.data),"autorized"==e.type&&this.redirectTo(401),"message"==e.type&&this.showMessageDialog(e),"message_bottom_sheet"==e.type&&p(this,e.data,"error")}}]),t}(),h=(n("d3b7"),n("bc3a")),g=n.n(h),b="/api",w={baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).baseURL||Object({NODE_ENV:"production",BASE_URL:"/"}).apiUrl||b},_=g.a.create(w);_.interceptors.request.use((function(t){if(void 0==window.store)console.log("store is not defined");else if(t.baseURL===b&&!t.headers.Authorization){var e=window.store.getters["auth/token"];e&&(t.headers.Authorization="Bearer ".concat(e))}return t}),(function(t){return Promise.reject(t)})),_.interceptors.response.use((function(t){return t}),(function(t){return console.log(t),t.response&&(console.log("error.response",t.response),401==t.response.status&&(window.store.commit("auth/CLEAR_AUTH"),window.router.push("/login"))),Promise.reject(t)})),Plugin.install=function(t){t.axios=_,window.axios=_,Object.defineProperties(t.prototype,{axios:{get:function(){return _}},$axios:{get:function(){return _}}})},r["a"].use(Plugin);var y=n("5530"),k=n("2f62"),S={install:function(t){t.mixin({computed:Object(y["a"])({},Object(k["b"])({user:"auth/user",role_sidebar:"auth/sidebar",user_role_name:"auth/role",token:"auth/token",authenticated:"auth/authenticated"}))})}};r["a"].use(S);n("159b"),n("b64b");var x=n("7bb1"),E=n("4c93");Object.keys(E).forEach((function(t){Object(x["c"])(t,E[t])})),r["a"].component("ValidationProvider",x["b"]),r["a"].component("ValidationObserver",x["a"]);var V=n("3d20"),O=n.n(V);window.Swal=O.a,window.Toast=O.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",O.a.stopTimer),t.addEventListener("mouseleave",O.a.resumeTimer)}}),window.EventBus=new f,window._responseBehaviors=new v,r["a"].component("layout-auth",n("bc1a").default),r["a"].component("layout-guest",n("d07e").default);n("3ca3"),n("ddb0");var T=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fuild:""}},[n("LoginForm")],1)},L=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[t.access_token?n("login-role",{attrs:{"access-token":t.access_token,roles:t.roles},on:{cancel:function(e){t.access_token=null}}}):n("LoginForm",{on:{login:t.logined}})],1)},j=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700"}},[n("v-toolbar",{attrs:{color:"indigo",dark:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[t._v("Sign in")]),n("v-spacer")],1),n("v-card-text",[n("ValidationObserver",{ref:"form"},[n("v-row",[n("v-col",{attrs:{md:"12"}},[n("ValidationProvider",{attrs:{name:"Email",vid:"email",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{label:"Email","error-count":"1",error:r&&r.length>0,"error-messages":r},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})]}}])})],1),n("v-col",{attrs:{md:"12"}},[n("ValidationProvider",{attrs:{name:"password",vid:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{type:"password",label:"Password","error-count":"1",error:r&&r.length>0,"error-messages":r},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})]}}])})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{loading:t.processing,color:"primary"},on:{click:t.login}},[t._v(" Sign in ")])],1)],1)},R=[],$=n("1da1"),P=(n("96cf"),{data:function(){return{processing:!1,form:{email:null,password:null}}},methods:{login:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.processing=!0,e.next=3,t.$refs.form.validate();case 3:if(n=e.sent,n){e.next=8;break}return console.log("form invalid"),t.processing=!1,e.abrupt("return");case 8:return e.prev=8,e.next=11,t.axios.post("auth/login",t.form);case 11:r=e.sent,a=r.data,a.success?t.$emit("login",a.data):("validator"==a.type&&t.$refs.form.setErrors(a.data),"message"==a.type&&window.Toast.fire({icon:"error",title:a.data})),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](8),console.log("error",e.t0),window.Toast.fire({icon:"error",title:e.t0.message});case 20:t.processing=!1;case 21:case"end":return e.stop()}}),e,null,[[8,16]])})))()}}}),B=P,N=n("6544"),U=n.n(N),M=n("5bc1"),D=n("8336"),H=n("b0af"),F=n("99d9"),q=n("62ad"),K=n("0fd9"),z=n("2fa4"),J=n("8654"),G=n("71d9"),Q=n("2a7f"),W=Object(l["a"])(B,C,R,!1,null,null,null),X=W.exports;U()(W,{VAppBarNavIcon:M["a"],VBtn:D["a"],VCard:H["a"],VCardActions:F["a"],VCardText:F["b"],VCol:q["a"],VRow:K["a"],VSpacer:z["a"],VTextField:J["a"],VToolbar:G["a"],VToolbarTitle:Q["a"]});var Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700"}},[n("v-toolbar",{attrs:{color:"indigo",dark:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[t._v("Sign in")]),n("v-spacer")],1),n("v-card-text",[n("ValidationObserver",{ref:"form"},[n("v-row",[n("v-col",{attrs:{md:"12"}},[n("ValidationProvider",{attrs:{name:"Role",vid:"role_id",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-autocomplete",{attrs:{label:"Role","error-count":"1",error:r&&r.length>0,"error-messages":r,items:t.roles,"item-value":"id","item-text":"name"},model:{value:t.form.role_id,callback:function(e){t.$set(t.form,"role_id",e)},expression:"form.role_id"}})]}}])})],1)],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{disabled:t.processing,color:"primary"},on:{click:t.cancel}},[t._v(" Cancel ")]),n("v-spacer"),n("v-btn",{attrs:{loading:t.processing,color:"primary"},on:{click:t.login}},[t._v(" Sign in ")])],1)],1)},Z=[],tt=(n("7db0"),{props:{accessToken:{type:String,default:null},roles:{type:[Array,Object],default:function(){return[]}}},data:function(){return{processing:!1,form:{role_id:null}}},methods:{cancel:function(){this.$emit("cancel")},login:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.processing=!0,e.next=3,t.$refs.form.validate();case 3:if(n=e.sent,n){e.next=8;break}return console.log("form invalid"),t.processing=!1,e.abrupt("return");case 8:return r={headers:{Authorization:"Bearer ".concat(t.accessToken)}},e.prev=9,e.next=12,t.axios.post("auth/login-role",t.form,r);case 12:a=e.sent,o=a.data,o.success?(i=o.data.access_token,s=o.data.user,window.store.commit("auth/SET_TOKEN",i),window.store.commit("auth/SET_USER",s),window.store.commit("auth/SET_ROLES",t.roles),window.store.commit("auth/SET_SIDEBAR",o.data.sidebar),window.store.commit("auth/SET_ROLE",t.roles.find((function(e){return e.id==t.form.role_id})).name),t.$router.push("/dashboard")):("validator"==o.type&&t.$refs.form.setErrors(o.data),"message"==o.type&&(console.log("Message error",o.data),alert(o.data))),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](9),console.log("error",e.t0);case 20:t.processing=!1;case 21:case"end":return e.stop()}}),e,null,[[9,17]])})))()}}}),et=tt,nt=n("c6a6"),rt=Object(l["a"])(et,Y,Z,!1,null,null,null),at=rt.exports;U()(rt,{VAppBarNavIcon:M["a"],VAutocomplete:nt["a"],VBtn:D["a"],VCard:H["a"],VCardActions:F["a"],VCardText:F["b"],VCol:q["a"],VRow:K["a"],VSpacer:z["a"],VToolbar:G["a"],VToolbarTitle:Q["a"]});var ot={components:{LoginForm:X,LoginRole:at},data:function(){return{access_token:null,roles:[]}},methods:{logined:function(t){this.roles=t.roles,this.access_token=t.access_token}}},it=ot,st=Object(l["a"])(it,I,j,!1,null,null,null),lt=st.exports;U()(st,{VCard:H["a"]});var ct={name:"Home",components:{LoginForm:lt}},ut=ct,dt=n("a523"),mt=Object(l["a"])(ut,A,L,!1,null,null,null),ft=mt.exports;U()(mt,{VContainer:dt["a"]});n("07ac");var pt=function(t,e,n){return t.matched.some((function(t){return t.meta[e]===n||Object.values(t.components).some((function(t){return t.options&&t.options[e]===n}))||t.components.default&&t.components.default[e]===n}))},vt=function(t,e,n){var r=!window.store.getters["auth/user"]&&pt(t,"auth",!0),a=window.store.getters["auth/user"]&&pt(t,"auth",!1);console.log("isNotguest",a),console.log("isNotAuth",r),a?null!=e&&"dashboard"==e.name?n({path:"/profil"}):n({name:"dashboard"}):r?n({path:"/login"}):n()};r["a"].use(T["a"]);var ht=[{path:"/",name:"Home",component:ft,meta:{layout:"layout-guest",auth:!1}},{path:"/login",name:"login",component:ft,meta:{layout:"layout-guest",auth:!1}},{path:"/dashboard",name:"dashboard",component:function(){return n.e("chunk-2d0e5357").then(n.bind(null,"9406"))},meta:{layout:"layout-auth",auth:!0}},{path:"/profil",name:"profil",component:function(){return n.e("chunk-2d2306d2").then(n.bind(null,"ebdc"))},meta:{layout:"layout-auth",auth:!0}},{path:"/settings",name:"settings",component:function(){return n.e("chunk-2d0a481e").then(n.bind(null,"0778"))},meta:{layout:"layout-auth",auth:!0}},{path:"/roles",name:"roles",component:function(){return Promise.all([n.e("chunk-6487723d"),n.e("chunk-1d6e89ac")]).then(n.bind(null,"e8d0"))},meta:{layout:"layout-auth",auth:!0}},{path:"/users",name:"users",component:function(){return Promise.all([n.e("chunk-6487723d"),n.e("chunk-2d0c0e38")]).then(n.bind(null,"4468"))},meta:{layout:"layout-auth",auth:!0}}],gt=new T["a"]({routes:ht});gt.beforeEach((function(t,e,n){vt(t,e,n)})),window.router=gt;var bt=gt,wt=function(){return{token:null,user:null,roles:[],sidebar:[],role:null}},_t={token:function(t){return t.token||localStorage.getItem("auth.token")},role:function(t){return t.role||localStorage.getItem("auth.role")},sidebar:function(t){return t.sidebar||localStorage.getItem("auth.sidebar")},user:function(t){return t.user||JSON.parse(localStorage.getItem("auth.user"))},authenticated:function(t){return t.token||localStorage.getItem("auth.token")}},yt={setToken:function(t,e){var n=t.commit;n("SET_TOKEN",e)},setUser:function(t,e){var n=t.commit;n("SET_USER",e)},clearToken:function(t){var e=t.commit;e("CLEAR_TOKEN")},clearUser:function(t){var e=t.commit;e("CLEAR_USER")}},kt=(n("e9c4"),{CLEAR_AUTH:function(t){t.token=null,localStorage.removeItem("auth.token"),t.user=null,localStorage.removeItem("auth.user"),t.role=null,localStorage.removeItem("auth.role"),t.roles=[],localStorage.removeItem("auth.roles"),t.sidebar=[],localStorage.removeItem("auth.sidebar")},CLEAR_TOKEN:function(t){t.token=null,localStorage.removeItem("auth.token")},CLEAR_USER:function(t){t.user=null,localStorage.removeItem("auth.user")},SET_TOKEN:function(t,e){t.token=e,localStorage.setItem("auth.token",e)},SET_USER:function(t,e){t.user=e,localStorage.setItem("auth.user",JSON.stringify(e))},SET_ROLE:function(t,e){t.role=e,localStorage.setItem("auth.role",e)},SET_ROLES:function(t,e){t.roles=e,localStorage.setItem("auth.roles",e)},SET_SIDEBAR:function(t,e){t.sidebar=e,localStorage.setItem("auth.sidebar",e)}}),St={namespaced:!0,state:wt,actions:yt,getters:_t,mutations:kt};r["a"].use(k["a"]);var xt=new k["a"].Store({state:{},mutations:{},actions:{},modules:{auth:St}});window.store=xt;var Et=xt,Vt=n("f309");r["a"].use(Vt["a"]);var Ot=new Vt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:bt,store:Et,vuetify:Ot,render:function(t){return t(u)}}).$mount("#app")},bc1a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("MySidebar"),n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("span",[t._v("App")])],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[t.user?n("span",{staticClass:"mr-2"},[t._v(t._s(t.user.name))]):t._e(),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer_local,callback:function(e){t.drawer_local=e},expression:"drawer_local"}},[n("v-list",[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.png"}})],1)],1),t.user?n("v-list-item",{attrs:{link:""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v(" "+t._s(t.user.name)+" ")]),n("v-list-item-subtitle",[t._v(t._s(t.user_role_name))])],1),n("v-list-item-action",[n("v-icon",[t._v("mdi-menu-down")])],1)],1):t._e()],1),n("v-divider"),t._e(),t.role_sidebar.length>0?n("Sidebar",{attrs:{menu:t.role_sidebar}}):t._e(),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item",{on:{click:t.logout}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-power")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("logout")])],1)],1)],1)],1)},i=[],s=n("1da1"),l=(n("96cf"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[t._l(t.menu,(function(e){return[e.children&&0!=e.children.length?n("v-list-group",{key:e.id,attrs:{"prepend-icon":e.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",{staticStyle:{"text-align":"start"}},[t._v(t._s(t.title_trl(e)))])]},proxy:!0}],null,!0)},[t._l(e.children,(function(e){return[e.children&&e.children.length>0?n("v-list-group",{key:e.id,attrs:{"no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",{staticStyle:{"text-align":"start"}},[t._v(t._s(t.title_trl(e)))])]},proxy:!0}],null,!0)},[t._l(e.children,(function(e){return[!e.children||e.children.length<=0?n("v-list-item",{key:e.id,attrs:{link:"",to:e.link}},[n("v-list-item-title",{staticStyle:{"text-align":"start"}},[t._v(t._s(t.title_trl(e)))]),n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)],1):n("v-list-group",{key:e.id,attrs:{"no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",{staticStyle:{"text-align":"start"}},[n("v-list-item-title",[t._v(t._s(t.title_trl(e)))])],1)]},proxy:!0}],null,!0)},t._l(e.children,(function(e){return n("v-list-item",{key:e.id,attrs:{link:"",to:e.link}},[n("v-list-item-title",{staticStyle:{"text-align":"start"}},[t._v(t._s(t.title_trl(e)))]),n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)],1)})),1)]}))],2):n("v-list-item",{key:e.id,attrs:{link:"",to:e.link}},[n("v-list-item-title",{staticStyle:{"text-align":"start"}},[t._v(t._s(t.title_trl(e)))]),n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)],1)]}))],2):n("v-list-item",{key:e.id,attrs:{link:"",to:e.link}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-title",{staticStyle:{"text-align":"start"}},[t._v(t._s(t.title_trl(e)))])],1)]}))],2)}),c=[],u={name:"sidebar2",props:["menu"],watch:{menu:{deep:!0,immediate:!0,handler:function(){}}},methods:{title_trl:function(t){return t.title}}},d=u,m=n("2877"),f=n("6544"),p=n.n(f),v=n("132d"),h=n("8860"),g=n("56b0"),b=n("da13"),w=n("5d23"),_=n("34c3"),y=Object(m["a"])(d,l,c,!1,null,null,null),k=y.exports;p()(y,{VIcon:v["a"],VList:h["a"],VListGroup:g["a"],VListItem:b["a"],VListItemContent:w["a"],VListItemIcon:_["a"],VListItemTitle:w["c"]});var S={props:{drawer:{top:Boolean,default:!0}},components:{Sidebar:k},data:function(){return{drawer_local:!0,selectedItem:0,items:[{text:"Home",icon:"mdi-home",link:"/dashboard"},{text:"Profil",icon:"mdi-account",link:"/profil"},{text:"Settings",icon:"mdi-cog",link:"/settings"},{text:"Roles",icon:"mdi-police-badge",link:"/roles"},{text:"Users",icon:"mdi-account-group",link:"/users"}]}},methods:{resolveAfter2Seconds:function(){return new Promise((function(t){window.store.commit("auth/CLEAR_AUTH"),t()}))},logout:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("auth/logout");case 3:window.store.commit("auth/CLEAR_AUTH"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),window.store.commit("auth/CLEAR_AUTH");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},watch:{user:{deep:!0,immediate:!0,handler:function(t){t||this.$router.push("/login")}},drawer_local:function(){this.$emit("update:drawer",this.drawer_local)},drawer:function(t){this.drawer_local=t}}},x=S,E=n("ce7e"),V=n("adda"),O=n("1800"),T=n("8270"),A=n("1baa"),L=n("f774"),I=Object(m["a"])(x,o,i,!1,null,null,null),j=I.exports;p()(I,{VDivider:E["a"],VIcon:v["a"],VImg:V["a"],VList:h["a"],VListItem:b["a"],VListItemAction:O["a"],VListItemAvatar:T["a"],VListItemContent:w["a"],VListItemGroup:A["a"],VListItemIcon:_["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VNavigationDrawer:L["a"]});var C={components:{MySidebar:j},data:function(){return{drawer:!0}}},R=C,$=n("7496"),P=n("40dc"),B=n("5bc1"),N=n("8336"),U=n("f6c4"),M=n("2fa4"),D=Object(m["a"])(R,r,a,!1,null,null,null);e["default"]=D.exports;p()(D,{VApp:$["a"],VAppBar:P["a"],VAppBarNavIcon:B["a"],VBtn:N["a"],VIcon:v["a"],VImg:V["a"],VMain:U["a"],VSpacer:M["a"]})},d07e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("span",[t._v("App")])],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1)],1)},a=[],o={},i=o,s=n("2877"),l=n("6544"),c=n.n(l),u=n("7496"),d=n("40dc"),m=n("8336"),f=n("132d"),p=n("adda"),v=n("f6c4"),h=n("2fa4"),g=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=g.exports;c()(g,{VApp:u["a"],VAppBar:d["a"],VBtn:m["a"],VIcon:f["a"],VImg:p["a"],VMain:v["a"],VSpacer:h["a"]})}});
//# sourceMappingURL=app.46e2e039.js.map