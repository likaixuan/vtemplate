/**
 *
主入口 2017/05/16
 *
 @author likaixuan
 */
import Vue from 'vue'



import * as lib from "./lib.js"
import App from './App'
import "./components.js"
import router from './router.js'
import "./assets/css/iconfont.css"
import "./assets/css/zf.less"

//拦截器配置
import './axios.js'

window.lib = lib;

//静态资源服务器
import { host } from "./config"
window.staticHost = host;

//引入vuex
//import store from './store/index.js'

//关闭生产提示
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})

