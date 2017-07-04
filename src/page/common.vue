<template>
        <div class="common-wrap">
           <zf-cell title="十三亿人都震惊了" label="北京欢迎你" to="/">
                <i class="iconfont"> &#xe642; </i>
           </zf-cell>
             
        </div>
    </div>
</template>

<script>
    /*
     *----------------------------
     * 急救常识
     *----------------------------
     * @author likaixuan
     * @date 2017/06/19
     * 
     */
    import cell from "../components/base/cell/"
    import Vue from "vue"
    Vue.use(cell)
    export default {

        name: 'app',
        data() {
            return {
              
            }
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
    .common-wrap {
        background:white;
    }
   
</style>