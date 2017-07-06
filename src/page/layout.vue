<template>
    <div>
        <zf-header fixed>
            <div>
                vtemplate
            </div>
        </zf-header>
        <zf-container top bottom scroll>
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </zf-container>

        <zf-footer>
            <router-link tag="div" to="/" replace>
                <i class="iconfont">&#xe604;</i>
                <div>list1</div>
            </router-link>
            <router-link tag="div" to="/common" replace>
                <i class="iconfont">&#xe669;</i>
                <div>cell</div>
            </router-link>
            <router-link tag="div" to="/personal" replace>
                <i class="iconfont">&#xe66e;</i>
                <div>list3</div>
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

<style lang="scss" scoped>

 @charset "utf-8";
 @import "../assets/css/library.scss";
 

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