// 使用easyui框架
import 'vx-easyui/dist/themes/default/easyui.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'
import EasyUI from 'vx-easyui'
Vue.use(EasyUI)

//import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') 
