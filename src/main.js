// vue cores
import Vue from 'vue'

// libs
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'


import router from './routes'
import App from './app.component.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
