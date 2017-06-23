<template>
  <div class="zfContainer" :style="{position:scroll?'fixed':'absolute'}" :class={zfContainerTop:top,zfContainerBottom:bottom,zfContainerScroll:scroll}>
      <slot>
        
      </slot>
  </div>
</template>

<script>
  export default {
    
    name: 'zfContainer',
    data() {
      return {
       
      }
    },
    props:{
        scroll: Boolean,
        top: Boolean,
        bottom: Boolean,
    },
    methods:{

    },
    mounted: function () {
     
      
    }
  }
</script>
