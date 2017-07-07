/**
 * 
 * toast组件
 * 
 * Created by likaixuan on 2017/6/22.
 */

import Vue from "vue"
import zfToast from './src/toast';

let obj = {};
let timeID;
zfToast.install = function (Vue) {
  obj = new (Vue.extend(zfToast))({
    el: document.createElement('div'),
  });


  Vue.prototype.toast = zfToast.open = (options) => {
    clearTimeout(timeID);
    options = options || {};
    
    if (!options.text) {
      return;
    }
    options.timer = options.timer || 3000;

    if(['top', 'center','bottom'].indexOf(options.location) ===-1) {
        options.location = "center"
    }

    obj.text = options.text;
    obj.location = options.location;
    obj.isShow = true;
    timeID = setTimeout(() => {
      obj.isShow = false;
    }, options.timer);

  }

  document.body.appendChild(obj.$el);
};

export default zfToast
