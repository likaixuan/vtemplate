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
import "./assets/css/zf.scss"
import "./assets/css/reset.scss"
//拦截器配置
import './api/'

window.lib = lib;


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

