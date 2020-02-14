import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import TelegramApi from '@/telegram-api'

Vue.config.productionTip = false

// Vue.prototype.$telegramApi = telegramApi


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