import Vue from 'vue';

import {  mapGetters } from 'vuex';

const Validation = {
    install(Vue) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    user: 'auth/user',
                    role_sidebar: 'auth/sidebar',
                    user_role_name: 'auth/role',
                    token: 'auth/token',
                    authenticated: 'auth/authenticated',
                   
                })

            },

        })
    }
}

Vue.use(Validation);