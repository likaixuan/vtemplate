/**
 * 
 * 加载lodding
 * 
 * Created by likaixuan on 2017/6/22.
 */

import Vue from "vue"
import zfLoading from './src/loading';

let obj = {};

zfLoading.install = function (Vue) {

  obj = new (Vue.extend(zfLoading))({
    el: document.createElement('div'),
  });
  let timeId;

  zfLoading.open = (options) => {
    if (!options || !options.mask || !options.text ||!options.timer) {
      if (!options) {
        options = {};
      }
      if (!options.mask && typeof (options.mask) === "undefined") {

        options.mask = true;
      }
      if (!options.text && options.text !== "") {
        options.text = "加载中···"
      }
      if(!options.timer) {
        options.timer = 10000;
      }
    }
    obj.text = options.text;
    obj.isMask = options.mask;
    obj.isloading = true;
   
    timeId = setTimeout(()=>{
       obj.isloading = false;
    },options.timer)

  }
  zfLoading.close = () => {
    obj.isloading = false;
    clearTimeout(timeId);
  }

  document.body.appendChild(obj.$el);
};

export default zfLoading
