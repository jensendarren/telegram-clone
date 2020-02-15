<template>
  <div class="login">
    <div id="login" class="screen">
      <div>
          <div class="login-logo"></div>

          <h3>{{$appName}}</h3>

          <div class="login-title">
              Sign in to Telegram
          </div>

          <div class="login-text">
              Please confirm your country and enter your phone number.
          </div>

          <!-- <div id="login_countryInputContainer" class="input-container select-container">
              <input id="login_countryInput" type="text" placeholder="Country">
              <label for="login_countryInput">Country</label>
              <div class="select-items"></div>
          </div> -->

          <div>
            <div id="login_phoneInputContainer" class="input-container">
                <h3>{{phoneNumberReversed}}</h3>
                <input id="login_phoneInput" type="tel" placeholder="Phone Number" v-model="phoneNumber">
                <label for="login_phoneInput">Phone Number</label>
            </div>

            <!-- <label class="check-container">Keep me signed in
                <input id="login_checkbox" type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </label> -->

            <button id="login_button" @click="sendCode">Next</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import router from '@/router'
import Component from 'vue-class-component'
import { mapState, mapGetters } from 'vuex'

@Component({
  computed: {
    phoneNumber: {
      get() {
        return this.$store.state.phoneNumber
      },
      set(value) {
        this.$store.commit('updatePhoneNumber', value)
      }
    },
    ...mapGetters(['phoneNumberReversed'])
  },
})
export default class Login extends Vue {
  phoneNumber
  $appName
  $telegramApi

  sendCode() {
    const { dispatch } = this.$store
    this.$telegramApi.sendCode(this.phoneNumber).then(result => {
        dispatch('setPhoneCodeHash', result.phone_code_hash)
        router.push('/entercode')
    })
    .catch(e => {
        console.error(e);
    });
  }
}
</script>