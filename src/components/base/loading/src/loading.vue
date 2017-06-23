<template>
    <div class="loading">
        <div class="mask" v-show="isMask&&isloading"> </div>
        <div class="spinner" :class="{active:!isMask}" v-show="isloading">
            <div class="item rect1"></div>
            <div class="item rect2"></div>
            <div class="item rect3"></div>
            <div class="item rect4"></div>
            <div class="item rect5"></div>
            <div class="text" v-show="isMask">
                {{text}}
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'ZfLoading',
        data() {
            return {
                isloading: false,
                isMask: true,
                text: ""
            }
        },
        methods: {

        }
    };
</script>
<style lang="less" scoped>
    
</style>