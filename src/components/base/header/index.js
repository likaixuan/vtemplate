/**
 * 
 * 头部
 * 
 * Created by likaixuan on 2017/6/22.
 */

import Vue from "vue"
import zfHeader from './src/header';


zfHeader.install = function (Vue) {
    Vue.component(zfHeader.name,zfHeader);
};

export default zfHeader
