/**
 * 
 * 头部
 * 
 * Created by likaixuan on 2017/7/4.
 */

import Vue from "vue"
import zfCell from './src/cell';


zfCell.install = function (Vue) {
    Vue.component(zfCell.name,zfCell);
};

export default zfCell
