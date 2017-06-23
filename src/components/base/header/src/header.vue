<template>
  <div class="zfHeader" :style="{position:fixed?'fixed':'relative'}">
      <div class="header-left">
          <slot name="left"></slot>
      </div>
      <div class="header-center">
           <slot></slot>
      </div>
      <div class="header-right">
           <slot name="right"></slot>
      </div>
     
  </div>
</template>

<script>
  /*
   *----------------------------
   * 导航组件
   *----------------------------
   * @author likaixuan
   * @date 2017/06/12
   * 
   */

  export default {
    
    name: 'zfHeader',
    data() {
      return {
       
      }
    },
    props:{
       fixed: Boolean
    },
    methods:{
    },
    mounted: function () {
     console.log(this.fixed,123123123);
      
    }
  }
</script>

