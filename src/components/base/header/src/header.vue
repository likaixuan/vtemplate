<template>
  <div class="zfHeader">
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
       
    },
    methods:{
    },
    mounted: function () {
     
      
    }
  }
</script>

