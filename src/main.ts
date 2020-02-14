import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MTProto from 'telegram-mtproto'
import TelegramApi from '@/telegram-api'

Vue.config.productionTip = false

const config = {
  id: 111111, // https://my.telegram.org/apps
  hash: 'SOMEBIGNUMBERFROMTELEGRAM'
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