//import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'

// 使用easyui框架
import 'vx-easyui/dist/themes/default/easyui.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'
import EasyUI from 'vx-easyui'
Vue.use(EasyUI)

// 使用vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router/index.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app') 
