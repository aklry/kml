import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './common/css/reset.css'
Vue.config.productionTip = false
Vue.use(ElementUI)

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
