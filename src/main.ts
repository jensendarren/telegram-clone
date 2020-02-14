import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MTProto from 'telegram-mtproto'
import TelegramApi from '@/telegram-api'

Vue.config.productionTip = false

const phone = {
    num : '+9996620001',
    code: '22222'
}

const config = {
    id: 1061423, // https://my.telegram.org/apps
    hash: '219d8193583c9d5d9f78f270dafa2653'
};

const api = {
    layer          : 57,
    initConnection : 0x69796de9,
    api_id         : 49631
}

const server = {
    dev: true
}

const client = MTProto({ server, api })

const telegramApi = new TelegramApi(config, client);

Vue.prototype.$appName = 'Telegram VueJS Clone'
Vue.prototype.$telegramApi = telegramApi

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')