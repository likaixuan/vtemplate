<template>
    <div class="toast"  v-show="text!==''&&isShow" :class="{top:location==='top',center:location==='center',bottom:location==='bottom'}">
        {{text}}
    </div>
</template>
<script>
    export default {
        name: 'ZfToast',
        data() {
            return {
                text:"",
                isShow:false,
                location:"center"
            }
        },
        methods: {

        }
    };
</script>
<style lang="scss" scoped>
    .toast {
        position:fixed;
        left:50%;
        transform:translate(-50%,-50%);
        padding:8px;
        border-radius:3px;
        background:rgba(0,0,0,0.5);
        box-sizing: content-box;
        color:white;
        font-size:16px;
        z-index:1100;
        max-width:200px;
    }
    .top {
        top:20%;
    }
    .center {
        top:50%;

    }
    .bottom {
        bottom:20%;
    }
</style>