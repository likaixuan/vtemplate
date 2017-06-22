/*
 *----------------------------
 * 路由配置
 *----------------------------
 * @author likaixuan
 * @date 2017/04/24
 * 
 */
import Vue from 'vue'
import Router from 'vue-router'

import index from "./page/index.vue"
import common from "./page/common.vue"
import personal from "./page/personal.vue"

Vue.use(Router)

export default new Router({
  routes: [ 
    { path: '/', component:index},
    { path: '/common', component: common }, 
    {path:'/personal',component:personal}
 
    ]
})


