import Vue from 'vue';

import {  mapGetters } from 'vuex';

const Validation = {
    install(Vue) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    user: 'auth/user',
                    token: 'auth/token',
                    authenticated: 'auth/authenticated',
                   
                })

            },

        })
    }
}

Vue.use(Validation);