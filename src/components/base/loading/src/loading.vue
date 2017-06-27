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
    .mask {
        position:fixed;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
        background:rgba(0,0,0,0.8);
        z-index:1000;
    }
    .spinner {
        margin: 100px auto;
        width: 100%;
        height: 60px;
        text-align: center;
        font-size: 10px;
        z-index:1001;
        position:fixed;
        top:30%;
        left:50%;
        transform:translate(-50%,-50%);
        .item{
            background-color:white;
            height: 100%;
            width: 6px;
            display: inline-block;
            -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }
        .text {
            font-size:1.2rem;
            color:white;
        }
            
        .rect2 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }
        
        .rect3 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }
        
        .rect4 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        
        .rect5 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }
     }
     .spinner.active {
         width:auto;
         background:rgba(0,0,0,0.8);
         padding:8px 10px;
         border-radius:6px;

     }
 
     @-webkit-keyframes stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
        20% { -webkit-transform: scaleY(1.0) }
    }
    
    @keyframes stretchdelay {
        0%, 40%, 100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
        }  20% {
            transform: scaleY(1.0);
            -webkit-transform: scaleY(1.0);
        }
    }

 

</style>