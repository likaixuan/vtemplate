<template>
    <div>
        <zf-header>
            <div>
                120急救
            </div>
        </zf-header>
        <div class="zfcontent">
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        <zf-footer>
            <router-link tag="div" to="/" replace>
                <i class="iconfont">&#xe604;</i>
                <div>首页</div>
            </router-link>
            <router-link tag="div" to="/common" replace>
                <i class="iconfont">&#xe669;</i>
                <div>急救</div>
            </router-link>
            <router-link tag="div" to="/personal" replace>
                <i class="iconfont">&#xe66e;</i>
                <div>我的</div>
            </router-link>
        </zf-footer>
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
                this.toast({ text: Math.random(), timer: 5000 })
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
.fade-enter-active, .fade-leave-active {
  transition: all .5s
}
.fade-enter  /* .fade-leave-active in <2.1.8 */ {
 
  transform:translateX(-100%);

}
.fade-leave-to {
 transform:translateX(100%);
}
</style>