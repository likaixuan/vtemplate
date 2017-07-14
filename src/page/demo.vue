<template>
    <div class="demo">
         <div class="item">header</div>
        <div class="item">container</div>
        <div class="item">footer</div>
        <div class="item">swipe</div>
        <div class="item">lodding</div>
        <div class="item">toast</div>
    </div>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    methods: {
        jump() {
            this.$router.push('/')
        }
    },
    mounted: function () {



    }
}
</script>
<style lang="scss" scoped>
 @import "../assets/css/library.scss";
.demo {
    padding-top: rem(32);
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
}

.item {
    font-size:rem(32);
    margin:0 rem(24) rem(24);
    color:$white;
    width: rem(160);
    height: rem(160);
    display: flex;
    justify-content: center;
    align-items: center;
    background:$LightPrimary;
}
</style>