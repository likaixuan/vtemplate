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


  zfLoading.open = (options) => {
    if (!options || !options.mask || !options.text) {
      if (!options) {
        options = {};
      }
      if (!options.mask && typeof (options.mask) === "undefined") {

        options.mask = true;
      }
      if (!options.text && options.text !== "") {
        options.text = "加载中···"
      }
    }
    obj.text = options.text;
    obj.isMask = options.mask;
    obj.isloading = true;

  }
  zfLoading.close = () => {
    obj.isloading = false;
  }

  document.body.appendChild(obj.$el);
};

export default zfLoading
