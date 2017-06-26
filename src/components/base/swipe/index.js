/**
 * 
 * 底部
 * 
 * Created by likaixuan on 2017/6/26.
 */

import Vue from "vue"
import zfSwipe from './src/swipe'

import 'vue-swipe/dist/vue-swipe.css';

// 引用vue-swipe  https://github.com/ElemeFE/vue-swipe
import { Swipe, SwipeItem } from 'vue-swipe';

zfSwipe.install = function (Vue) {
    Vue.component('zfSwipe', Swipe);
    Vue.component('zfSwipeItem', SwipeItem);
};

export default zfSwipe
