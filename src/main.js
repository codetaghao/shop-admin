import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式
import './assets/styles/index.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
