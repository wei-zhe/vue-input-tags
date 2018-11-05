import Vue from 'vue'
import App from './App.vue'
import vueInputTags from './lib/index.js'
// import vuePayKeyboard from './lib/indexvue-pay-keyboard'
Vue.use(vueInputTags)
new Vue({
  el: '#app',
  render: h => h(App)
})
