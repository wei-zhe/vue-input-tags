<template>
    <div 
        :style="{
            'width' : width + 'px',
            'height' : height + 'px',
        }"
        class="inputTags" 
    >
        TAGS
    </div>
</template>
<script>
import inputTagsIcon from './icon.js' // 导入组件

export default {
    name: 'vue-inputTags',
    props: {
        width: { // 密码位数
            type: Number,
            default: 500
        }, 
        height: { // 密码位数
            type: Number,
            default: 500
        }, 
    },
    model: {
      prop: 'value',//绑定的值，通过父组件传递
      event: 'update'//自定义时间名
    },
    data() {
        return {
        }
    },
    watch : {
    },
    computed: {  
    },
    mounted () {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.inputTags{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    *{
        user-select: none !important;
    }
    
}
</style>