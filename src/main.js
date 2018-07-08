// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import * as Api from './api/index.js'
import toast from './components/toast/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import Utils from './utils/index.js'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

// Vue.prototype.$utils = Utils
Vue.prototype.$api = Api
Vue.prototype.$toast = toast
