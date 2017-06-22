<template>
    <div>
        <kx-header>
            <div>
                120急救
            </div>
        </kx-header>
        <div class="content">
            <img src="../assets/img/logo.png" alt="">
        </div>
        <div class="footer">
            <div class="nav max-width">
                <router-link to="/common"  tag="div" class="nav-item">
                    <i class="iconfont">&#xe669;</i>
                    <p>急救常识</p>
                </router-link>
                <router-link to="/personal" tag="div" class="nav-item">
                    <i class="iconfont">&#xe66e;</i>
                    <p>个人中心</p>
                </router-link>
            </div>
        </div>
      
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
    import test from "../components/test.vue";
    export default {

        name: 'app',
        data() {
            return {
               
            }
        }, components: {
            "kx": test
        },
        methods: {
         
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