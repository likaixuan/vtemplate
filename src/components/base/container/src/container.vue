<template>
  <div class="zfContainer"  :class={zfContainerTop:top,zfContainerBottom:bottom,zfContainerScroll:scroll}>
      <slot>
        
      </slot>
  </div>
</template>

<script>
  import { debounce } from "../../../../lib.js"
  export default {

    name: 'zfContainer',
    data() {
      return {

      }
    },
    props: {
      scroll: Boolean,
      top: Boolean,
      bottom: Boolean,
      drop: Boolean,
      distance: {
        type: Number,
        default: 0
      }
    },
    methods: {

    },
    mounted: function () {
      if (this.drop) {
        let el = this.$el;
        let fun = debounce( ()=> {
             if(el.scrollHeight - el.scrollTop-el.offsetHeight<=this.distance) {
               this.$emit("drop")
             }
        },50)
        el.onscroll =function(){
          fun();

        }

      }

    }
  }
</script>