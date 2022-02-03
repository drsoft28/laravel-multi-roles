//"use strict";

import Vue from 'vue';

import axios from "axios";

let baseApiAddress = process.env.NODE_ENV === 'production' ? "/api" : 'http://127.0.0.1:8082/api'

let config = {
    baseURL: process.env.baseURL || process.env.apiUrl || baseApiAddress
        // timeout: 60 * 1000, // Timeout
        // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        if (window.store == undefined) {
            console.log('store is not defined')
        } else
        if (config.baseURL === baseApiAddress && !config.headers.Authorization) {

            const token = window.store.getters['auth/token'];

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
                
            }
        }
        return config;
    },
    function(error) {
        // Do something with request error
        
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {

        console.log(error);
        if (error.response) {
           //

        }
        // Do something with response error
        return Promise.reject(error);
    }
);

Plugin.install = function(Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin)

export default _axios;