<template>
  <div id="app">
    <div class="canvasBox">
      <vue-inputTags 
        v-model   = "parentValue"
        :width    = "500"
        :height   = "500"
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
      parentValue : '123',
    }
  },
  watch : {
    'parentValue': function(val, oldval) {
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