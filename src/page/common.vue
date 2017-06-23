<template>
        <div class="common-wrap">
            <h2>急救常识</h2>
            <div class="common-box">
                <div class="item">
                    湿疹
                </div>
                 <div class="item">
                   乳房疼痛
                </div>
                 <div class="item">
                   先兆流产
                </div>
                 <div class="item">
                   肠炎
                </div>
                 <div class="item">
                   疹子
                </div>
                 <div class="item">
                    睡眠不好
                </div>
                 <div class="item">
                    脱皮
                </div>
                 <div class="item">
                    打喷嚏
                </div>
               
                 <div class="item">
                    恶心呕吐
                </div>
                  <div class="item">
                    早泄
                </div>
            </div>
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
        min-height:100%;
        h2 {
            font-weight:100;
            font-size:1.5rem;
            padding:2*@gird;
        }
        .common-box {
            display:flex;
            flex-wrap:wrap;
          
            .item {
                font-size:1.3rem;
                margin:1*@gird;
                border:1px solid #9e9e9e;
                padding:1*@gird;
                border-radius:@border-radius;
            }
        }
    }

</style>