import Vue from 'vue'
import Vuex from 'vuex'
import module_auth from './modules/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth:module_auth
  }
});
window.store = store;
export default store;
