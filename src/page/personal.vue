<template>
    <div class="personal-wrap">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</template>

<script>
/*
 *----------------------------
 * 个人中心
 *----------------------------
 * @author likaixuan
 * @date 2017/06/19
 * 
 */

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
 @import "../assets/css/library.scss";
    .personal-wrap {
        padding-top:rem(32);
        display:flex;
        justify-content:space-around;
    }
    .item {
        width:rem(160);
        height:rem(160);
        display:flex;
        justify-content:center;
        align-items: center;
        background:red;
   
        
    }
</style>