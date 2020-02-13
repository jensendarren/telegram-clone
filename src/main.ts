import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TelegramApi from '@/telegram-api'
// import MTProto from '../mtproto2-browser'
import MTProto from 'telegram-mtproto'

Vue.config.productionTip = false

const phone = {
  num : '+9996620001',
  code: '22222'
}

const config = {
  id: 111111, // https://my.telegram.org/apps
  hash: 'SOMEHASHFROMTELEGRAMAPPS'
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
