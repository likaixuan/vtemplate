<template>
    <div>
        <div class="content">
             <zf-cell title="GitHub" label="项目" onclick="window.open('https://github.com/likaixuan/vtemplate')">
                <i class="iconfont"> &#xe735; </i>
             </zf-cell>
              <zf-cell title="扩展" label="如何自定义开发组件、插件" to="/">
                <i class="iconfont"> &#xe7b0; </i>
             </zf-cell>
              <zf-cell title="关于项目" label="介绍如何用vtemplate构建应用" to="/">
                <i class="iconfont"> &#xe6c9; </i>
             </zf-cell>
              <zf-cell title="打赏" label="您的支持就是我们最大的动力" to="/">
                <i class="iconfont"> &#xe60d; </i>
             </zf-cell>
              <zf-cell title="反馈" label="使用过程中遇到的问题" to="/">
                <i class="iconfont"> &#xe61f; </i>
             </zf-cell>
           
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

<style lang="scss" scoped>
    .content {
        font-size:64px;
    }
</style>