<template>
    <div>
        <zf-header fixed>
            <div>
                <template v-if="$route.path==='/'">
                    vtemplate
                </template>
                <template v-else-if="$route.path==='/demo'">
                    demo
                </template>
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
                <div>index</div>
            </router-link>
            <router-link tag="div" to="/demo" replace>
                <i class="iconfont">&#xe6e4;</i>
                <div>demo</div>
            </router-link>
            <router-link tag="div" to="/personal" replace>
                <i class="iconfont">&#xe6a4;</i>
                <div>关于</div>
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

.fade-enter-active,
.fade-leave-active {
    transition: all .5s;
    transform: translate3D(0px, 0px, 0);
}

.fade-enter
/* .fade-leave-active in <2.1.8 */

{
    transform: translate3D(-100%, 0px, 0);
}

.fade-leave-to {
    transform: translate3D(100%, 0px, 0);
}
</style>