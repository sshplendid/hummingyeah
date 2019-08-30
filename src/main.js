import Vue from 'vue'
import Instagram from './Instagram.vue'
// import App from './App.vue'

Vue.config.productionTip = false
var App = Instagram

new Vue({
  render: h => h(App),
}).$mount('#app')
