import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import 'lib-flexible/flexible.js'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://dev.feimooc.com/mapi_v3/'
axios.defaults.timeout = 1000
// 默认的contenttype为json以及utf-8；
axios.defaults.headers = { 'Content-Type': 'text/html;charset=gb2312' }

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
