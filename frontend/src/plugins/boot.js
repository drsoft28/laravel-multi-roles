import vue from 'vue';
import EventBus from '../Helpers/EventBus'
import Behaviors from '../Helpers/Behaviors'
import './axios'
import './mixins/user';
import './vee-validate'
import './sweetalert2'
window.EventBus =  new EventBus();
window._responseBehaviors = new Behaviors()
vue.component('layout-auth',require('../layouts/auth/index').default)
vue.component('layout-guest',require('../layouts/guest/index').default)