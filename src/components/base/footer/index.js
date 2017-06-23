/**
 * 
 * 底部
 * 
 * Created by likaixuan on 2017/6/22.
 */

import Vue from "vue"
import zfFooter from './src/footer';


zfFooter.install = function (Vue) {
    Vue.component(zfFooter.name,zfFooter);
};

export default zfFooter
