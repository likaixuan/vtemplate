<template>
  <div id="app">
    <transition name="Jump">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
/*
 *----------------------------
 * 主布局(layout)
 *----------------------------
 * @author likaixuan
 * @date 2017/05/26
 * 
 */

export default {

  name: 'app',
  data() {
    return {

    }
  },
  mounted: function () {

  }
}
</script>

<style lang="scss" scoped>
  .Jump-enter-active,
  .Jump-leave-active {
    transition: opacity .5s
  }

  .Jump-enter,
  .Jump-leave-to
  {
    opacity: 0
  }
</style>