import Notifications from './Notifications.vue'
import { events } from './events'

const Notify = {
  install(Vue, options = {}) {
    this.params = options;
    Vue.component(options.componentName || 'notifications', Notifications)

    const notify = (params) => {
      if (typeof params === 'string') {
        params = { title: '', text: params }
      }

      if (typeof params === 'object') {
        events.$emit('add', params)
      }
    }
    const name = options.name || 'notify'
    Vue[name] = Vue.prototype[`$${name}`] = notify
  }
}

export default Notify
