/**
 *
 axios配置 2017/05/16
 *
 @author likaixuan
 */

import {devUrl,host} from "../config"

const BASE = devUrl;

import router from '../router.js'
import Vue from 'vue';
import axios from 'axios';
import Qs from 'qs'


import loading from "../components/base/loading/"
Vue.use(loading)
//静态资源服务器
Vue.prototype.host = host;


let ajax = axios.create({
    baseURL: BASE,
    timeout: 100000,
    transformRequest: [function (data) {
        if(data instanceof FormData) {
            return data;
        }
        return Qs.stringify(data);
    }]
});



// //拦截请求
ajax.interceptors.request.use(config => {
    loading.open();
    return config;
}, error => {
    loading.close();
    return Promise.reject(error);
});

//拦截响应
ajax.interceptors.response.use(response => {
    loading.close();
    return response;
}, error => {
    loading.close();
    return Promise.reject(error);
});

export default ajax