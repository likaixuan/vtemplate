/**
 *
 全局注册组件 2017/04/24
 *
 @author likaixuan
 */
import Vue from 'vue'

import zfHeader from './components/base/header/'
import zfFooter from './components/base/footer/'

import toast from "./components/base/toast/"

Vue.use(zfHeader);
Vue.use(zfFooter);


Vue.use(toast);
