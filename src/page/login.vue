<template>
  <div class="login">
    <zf-header fixed>
      <div>
        vtemplate
      </div>
    </zf-header>
    <zf-container @drop="test"  drop top scroll>
            <div class="ddd" >
              1,
              2,3,2512512
            </div>
    </zf-container>
  </div>
</template>

<script>

  import {debounce} from  "../lib.js"
  export default {
    data() {
      return {

      }
    },
    methods: {
      test () {
        alert("到底了");
      }
    },
    mounted: function () {
      

    }
  }
</script>
<style lang="less" scoped> 
 @import "../assets/css/library.less";
    .ddd {
      height:900px;
      width:100%;
      background:green;
    }
 
</style>