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

//静态资源服务器
Vue.prototype.host = host;

Vue.prototype.$http = axios.create({
    baseURL: BASE,
    timeout: 100000,
    transformRequest: [function (data) {
        if(data instanceof FormData) {
            return data;
        }
        return Qs.stringify(data);
    }]
});

import loading from "../components/base/loading/"
Vue.use(loading)
loading.open({mask:111,text:"gasgasg"});
// //拦截请求
Vue.prototype.$http.interceptors.request.use(config => {
    loading.open();
    return config;
}, error => {
    loading.close();
    return Promise.reject(error);
});

//拦截响应
Vue.prototype.$http.interceptors.response.use(response => {
    loading.close();
    return response;
}, error => {
    loading.close();
    return Promise.reject(error);
});