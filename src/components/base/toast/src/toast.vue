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
   
</style>