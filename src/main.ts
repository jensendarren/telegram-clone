import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TelegramApi from '@/telegram-api'
import MTProto from 'telegram-mtproto'

Vue.config.productionTip = false

const phone = {
  num : '+9996620001',
  code: '22222'
}

const config = {
  id: 1111111, // https://my.telegram.org/apps
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

// Uncomment below to test this!

// async function connect(){
//   const { phone_code_hash } = await client('auth.sendCode', {
//     phone_number  : phone.num,
//     current_number: false,
//     api_id        : 49631,
//     api_hash      : 'fb050b8f6771e15bfda5df2409931569'
//   })
//   const { user } = await client('auth.signIn', {
//     phone_number   : phone.num,
//     phone_code_hash: phone_code_hash,
//     phone_code     : phone.code
//   })

//   console.log('signed as ', user)
// }

// connect()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
