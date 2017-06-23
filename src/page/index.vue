<template>
    <div>
        <div class="content">
            <img @click="test" src="../assets/img/logo.png" alt="">
        </div>
    </div>
</template>

<script>
    /*
     *----------------------------
     * 主布局(layout)
     *----------------------------
     * @author likaixuan
     * @date 2017/06/19
     * 
     */
    import Vue from "vue"

  
    export default {

        name: 'app',
        data() {
            return {
               
            }
        },
        methods: {
         test() {
             this.toast({text:Math.random(),timer:5000})
         }
        },
        mounted: function () {
        

        }
    }
</script>

<style lang="less" scoped>

 @charset "utf-8";
 @import "../assets/css/library.less";
 
.nav {
  height:4.5rem;
  color: white;
  background: @Primary;
  padding: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0px;
  .nav-item {
    width: 50%;
    float: left;
    text-align: center;
  }
  .nav-item:first-child {
    border-right: 1px solid white;
  }
}
.content img {
    width:80%;
    max-width:30rem;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-60%);
}

</style>