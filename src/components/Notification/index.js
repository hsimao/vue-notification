import Notification from './notification.vue'
import notif from './function'

// 直接宣告為全域組件
export default Vue => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notif
}
