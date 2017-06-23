<template>
    <div class="personal-wrap">
         <div class="user-box">
                <div class="user-header">
                    <img src="../assets/img/header.png" alt="">
                </div>
                <div class="user-name">
                        LuoYuFeng
                </div>
            </div>
            <div class="info-box">
                 <div class="list">
                     <div>姓名&nbsp:<span>罗玉凤</span></div>
                     <div>年龄&nbsp:<span>28岁</span></div>
                     <div>电话&nbsp:<span>15227503302</span></div>
                     <div>性别&nbsp:<span>不祥</span></div>
                     <div class="block">地址&nbsp:<span>保定市北市区莲花乡池水沟</span></div>
                     <div  class="block">个人病情简历 </div>
                     <textarea name="" id=""></textarea>
                 </div>
                  <div class="list">
                     <div>姓名&nbsp:<span>罗玉凤</span></div>
                     <div>年龄&nbsp:<span>28岁</span></div>
                     <div>电话&nbsp:<span>15227503302</span></div>
                     <div>性别&nbsp:<span>不祥</span></div>
                     <div class="block">地址&nbsp:<span>保定市北市区莲花乡池水沟</span></div>
                     <div  class="block">个人病情简历 </div>
                     <textarea name="" id=""></textarea>
                 </div>
                  <div class="list">
                     <div>姓名&nbsp:<span>罗玉凤</span></div>
                     <div>年龄&nbsp:<span>28岁</span></div>
                     <div>电话&nbsp:<span>15227503302</span></div>
                     <div>性别&nbsp:<span>不祥</span></div>
                     <div class="block">地址&nbsp:<span>保定市北市区莲花乡池水沟</span></div>
                     <div  class="block">个人病情简历 </div>
                     <textarea name="" id=""></textarea>
                 </div>
               
            </div>
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

<style lang="less" scoped>

 @charset "utf-8";
 @import "../assets/css/library.less";

  .user-box {
      width:100%;
      padding:2*@gird;
      display:flex;
       align-items: center;
      .user-header {
          width:18%;
          padding-top:18%;
          max-width:75px;
           position:relative;
           img {
               position: absolute;
               left:50%;
               top:50%;
               transform:translate(-50%,-50%);
               width:100%;
               height:100%;
               max-width:75px;
               max-height:75px;
               border-radius:100%;
           }
      }
      .user-name {
          margin-left: 2*@gird;
          font-size:1.3rem;
      }
      
  }
  
  
  .list {
      display:flex;
      flex-wrap:wrap;
      padding:1*@gird 3*@gird;
      div {
          width:50%;
          font-size:1.3rem;
          margin-top:2*@gird;
          span {
              margin-left:8px;
          }
      }
      .block {
          width:100%;
      }
      textarea {
          margin-top:2*@gird;
          width:100%;
          height:5rem;
          border-radius:@border-radius;
          resize:none;
          color:@Gray;
      }
  }

</style>