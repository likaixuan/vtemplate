<template>
   <div>
       <ul>
            <slot name="item"
                v-for="item in items"
                :text="item.text" 
                :name="item.name">
                <!-- 这里写入备用内容 -->
            </slot>
        </ul>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                
            };
        },
        props:{
            items:{
                 type: Array,
         default:[]
            }
            
        }

    }
</script>


<style>

</style>