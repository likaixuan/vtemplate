/**
 * 
 * 底部
 * 
 * Created by likaixuan on 2017/6/22.
 */

import Vue from "vue"
import zfContainer from './src/container';


zfContainer.install = function (Vue) {
    Vue.component(zfContainer.name,zfContainer);
};

export default zfContainer
