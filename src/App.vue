<template>
  <div id="app">
    <div class="canvasBox">
      <vue-inputTags 
        v-model   = "parentValue"
        :width    = "500"
        :height   = "500"
        :setting  = 'setting'
      >
      </vue-inputTags>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      parentValue : [
        {
          title : '第一个标签first'
        },
        {
          title : '第二个标签'
        },
        {
          title : '第三个标签'
        },
        {
          title : '第四个标签last'
        },
      ],
      setting : {
        wordage : 3,
        ArrayLength: 5,
      },
    }
  },
  watch : {
    'parentValue': function(val, oldval) {
      console.log(this.parentValue);
    },
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
.canvasBox {
  height: 500px;
  width:  500px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>