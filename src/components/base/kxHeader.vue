<template>
  <div class="header">
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
    
    name: 'app',
    data() {
      return {
       
      }
    },
    props:{
        nnn:{
            default:"lkx"
        }
    },
    methods:{

    },
    mounted: function () {
     
      
    }
  }
</script>

<style lang="less">
@charset "utf-8";
@import "../../assets/css/library.less";
 div {
     
 }
 .header {
     height:7*@gird;
     background:@Primary;
     color:@white;
     font-size:1.3rem;
     position:relative;
      .header-center {
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
     }
     .header-right {
         position:absolute;
         top:50%;
         right:2*@gird;
          transform:translateY(-50%);
         
     }
     .header-left {
        position:absolute;
         top:50%;
         left:2*@gird;
        transform:translateY(-50%);
         
     }
     i {
        vertical-align:middle;
     }
}
</style>