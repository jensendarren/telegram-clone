<template>
  <div class="login">
    <div id="login" class="screen">
      <div>
          <div class="login-logo"></div>

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

          <div id="login_phoneInputContainer" class="input-container">
              <input id="login_phoneInput" type="tel" placeholder="Phone Number" :value="phoneNumber">
              <!-- <input v-model="message" placeholder="edit me"> -->
              <label for="login_phoneInput">Phone Number</label>
          </div>

          <!-- <label class="check-container">Keep me signed in
              <input id="login_checkbox" type="checkbox" checked="checked">
              <span class="checkmark"></span>
          </label> -->

          <!-- <a id="login_button" class="btn btn-primary">Next</a> -->
          <button id="login_button" @click="moveToEnterCode">Next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import router from '@/router'
import Component from 'vue-class-component'
import telegramApi from '@/telegram-api'

@Component({})
export default class Login extends Vue {
  phoneNumber = '+85512223344'

  moveToEnterCode() {
    telegramApi.sendCode(this.phoneNumber).then(result => {
        console.log(result)
    })
    .catch(e => {
        console.error(e);
    });
    // router.push('/entercode')
  }
}
</script>

