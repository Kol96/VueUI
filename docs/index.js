import Vue from 'vue'
import App from './App'
import router from './router.config'
import DemoBlock from './components/demo-block.vue'

// 完整引用
import VueUI from '@/index.js'
import 'packages/theme-chalk/src/index.scss'
Vue.use(VueUI)
// 单独引用
// import { Hello } from '@/index.js'
// Vue.use(Hello)

Vue.component('demo-block', DemoBlock)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
