import vue from 'vue';
import './axios'
import './mixins/user';
import './vee-validate'
import './sweetalert2'
vue.component('layout-auth',require('../layouts/auth/index').default)
vue.component('layout-guest',require('../layouts/guest/index').default)