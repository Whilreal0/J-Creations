import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
export const bus = new Vue();
import '@/assets/tailwind.css'
import '@/icons.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
