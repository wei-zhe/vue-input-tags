<template>
    <div 
        :style="{
            'width' : width + 'px',
            'height' : height + 'px',
        }"
        class="inputTags" 
    >
        <div 
            class="scrollbox"
            :style="{
                'width' : width - 5  + 'px',
                'height' : height - 5 + 'px',
                'padding-right'  : '36px',
                'padding-bottom' : '36px',
            }"
        >
            <div 
                class="itemTags" 
                v-for="(item, index) in value"
                :style="{
                    'max-width' : titleStyle.minWidth + 10 + 'px',
                }"
            >
                <div 
                    class="titleMsg"
                    :style="{
                        'max-width' : titleStyle.minWidth + 10 + 'px',
                    }"
                >
                    <i class="mask"></i>
                    <span 
                        class="iconBtn"
                        v-if="iconFont.close"
                        v-html="iconFont.close.htmlSvg"
                        @click="removeItem(index)"
                    ></span>
                    {{item.title.slice(0, Tsetting.wordage)}}
                </div>
            </div>
            
            <div 
                v-if="value.length < Tsetting.ArrayLength"
                class="inputBox"
                v-on:keyup.enter="addValue($event, false)"
            >
                <input 
                    v-model="inputData.value" 
                    type="text"
                    placeholder="请输入标签"
                    :maxlength="Tsetting.wordage"
                />
            </div>
        </div>

    </div>
</template>
<script>
import inputTagsIcon from './icon.js' // 导入组件

export default {
    name: 'vue-inputTags',
    model: {
      prop: 'value',  //绑定的值，通过父组件传递
      event: 'updateInputTags' //自定义事件名
    },
    data() {
        return {
            iconFont   : {},
            titleStyle : {
                minWidth : 0
            },
            inputData  : {
                value   : 'sss',  
            },
            Tsetting   : {}, 
        }
    },
    props: {
        width   : {
            type       : Number,
            default    : 500,
        }, 
        height  : {
            type: Number,
            default: 500
        }, 
        value   : {
            type: Array,
            default: [],
        },
        setting : {
            type: Object,
            default: function(){
                return {
                    wordage     : Infinity,
                    ArrayLength : Infinity, 
                };
            },
        }
    },
    watch : {
    },
    computed: {  
    },
    mounted () {
        this.iconFont = inputTagsIcon;
        this.calculation();
        console.log(this.value)
    },
    methods: {
        calculation(){  // 计算title的

            let settingData = ['wordage', 'ArrayLength'];
            this.Tsetting   = this.setting;

            for(let item = 0; item < settingData.length; item++){
                if(!(settingData[item] in this.Tsetting)){
                   this.Tsetting[ settingData[item] ] = Infinity;
                }
            }

            this.titleStyle.minWidth = (this.Tsetting.wordage - 0) * 15;
        },
        removeItem(index){
            let valueArray = this.value;
            valueArray.splice(index, 1);
            this.$emit('updateInputTags', valueArray)
        },
        addValue(el, action){     // 添加标签
            this.inputData.value = this.trimStr(this.inputData.value);
            if(!this.inputData.value.length)return;

            if(this.inputData.value.length > 5){
                this.inputData.value = this.inputData.value.slice(0, 5);
            }
            let valueArray = this.value;
            console.log(valueArray.length , this.Tsetting.ArrayLength)
            if(valueArray.length < this.Tsetting.ArrayLength){
                valueArray.push({ title: this.inputData.value });
            }
            if(action){
                el.path[0].blur();
            }
            this.inputData.value = '';
            this.$emit('updateInputTags', valueArray)
        },
        trimStr(str){
            return str.replace(/(^\s*)|(\s*$)/g,"");
        },
    }
}
</script>
<style lang="scss" scoped>
.inputTags{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 5px;
    border: 1px solid #808080;
    overflow: hidden;
    font-size: 15px;
    .scrollbox{
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        overflow: scroll;
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px;
        .inputBox{
            width: auto;
            height: auto;
            transition: all 0.3s;
            margin: 0 3px;
            margin-bottom: 6px;
            background-color: rgba(0,0,0,0);
            input{
                background-color: rgba(0,0,0,0);
                border: none;
                &:focus{
                    border-bottom: 1px solid #ddd;
                    outline: none;  
                }
            }
        }
        .itemTags{
            width: auto;
            height: 20px;
            transition: all 0.3s;
            margin: 0 3px;
            margin-bottom: 6px;
            .titleMsg{
                min-width: 30px;
                background: #ddd;
                padding: 0 5px;
                border-radius: 5px;
                overflow: hidden;
                position: relative;
                &:hover{
                    .iconBtn{
                        right: 5px;
                    }
                    .mask{
                    left: 0px; 
                    }
                }
                .mask{
                    position: absolute;
                    left: -100%;
                    top: 0px; 
                    z-index: 5; 
                    width: 100%;
                    height: 100%;
                    background: rgba(66, 63, 63, 0.5);
                    transition: all 0.3s;
                }
                .iconBtn{
                    position: absolute;
                    right: -25px;
                    top: 4px;
                    z-index: 10;
                    width: 13px;
                    height: 13px;
                    background: #ddd;
                    border-radius: 100%;
                    cursor: pointer;
                    transition: all 0.3s;

                    &:hover{
                        background: #fff;
                    }
                }
            }
        }
    }
}
</style>