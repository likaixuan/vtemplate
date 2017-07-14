<template>
  <div class="login">
    <zf-header fixed>
      <div>
        vtemplate
      </div>
    </zf-header>
    <zf-container top>
        <div @click="jump">返回首页</div>
      <!--<zf-swipe class="my-swipe" :speed="400" :auto="5000">
        <zf-swipe-item class="slide1">
          <img src="../assets/img/swipe1.jpg" alt="">
        </zf-swipe-item>
        <zf-swipe-item class="slide2">
          <img src="../assets/img/swipe2.jpg" alt="">
        </zf-swipe-item>
      </zf-swipe>-->
    </zf-container>
  
  </div>
</template>
<style>

  .my-swipe {
  height:150px;
  width:100%;
  color: #fff;
  font-size: 30px;
  text-align: center;

}
.mint-swipe-items-wrap img {
   width:100%;
   height:150px;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}


</style>
<script>

  export default {
    data() {
      return {

      }
    },
    methods: {
      jump () {
        this.$router.push('/')
      }
    },
    mounted: function () {



    }
  }
</script>
