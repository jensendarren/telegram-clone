import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phoneNumber: '+9996620000',
    phoneCodeHash: null,
    code: '22222',
    user: {first_name:'Darren', last_name: 'Jensen'}
  },
  mutations: {
    updatePhoneNumber(state, newPhoneNumber) {
      state.phoneNumber = newPhoneNumber
    },
    updateCode(state, newCode) {
      state.code = newCode
    },
    updatePhoneCodeHash(state, newHash) {
      state.phoneCodeHash = newHash
    },
    updateUser(state, newUser) {
      state.user = newUser
    }
  },
  actions: {
    setPhoneCodeHash({ commit }, hash) {
      commit('updatePhoneCodeHash', hash)
    },
    setUser({ commit }, user) {
      commit('updateUser', user)
    }
  },
  modules: {
  },
  // Example of getters which are like computed
  // properties directly on the store
  getters: {
    phoneNumberReversed: state => {
      return state.phoneNumber.split("").reverse().join("");
    }
  }
})
