import Vue from 'vue'
import App from './App.vue'

import Notification from './components/Notification'
Vue.use(Notification)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
