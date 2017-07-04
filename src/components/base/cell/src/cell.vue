<template>
  <div class="zfCell" @click="openUrl">
    <div class="content">
      <div class="title">
        {{title}}
      </div>
      <div class="secondary">
         {{label}}
      </div>
    </div>
    <div class="icon">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
  /*
   *----------------------------
   * 导航组件
   *----------------------------
   * @author likaixuan
   * @date 2017/06/12
   * 
   */

  export default {

    name: 'zfCell',
    data() {
      return {

      }
    },
    props: {
      title:{
        type:String,
        default:""
      },
      label:{
        type:String,
        default:""
      },
      to:String
    },
    methods: {
      openUrl () {
        if(!!this.to) {
          this.$router.push(this.to)
        }
      }
    },
    mounted: function () {
   

    }
  }
</script>