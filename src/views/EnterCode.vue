<template>
  <div class="entercode">
    <div id="enterCode" class="screen">
      <div>
        <!-- <div class="monkey-logo">
          <picture>
            <source media="(min-width: )" srcset="">
            <img src="" alt="">
          </picture>
            <tgs-player
                    src="assets/monkey/TwoFactorSetupMonkeyIdle.tgs" background="#fff" speed="1"
                    style="width: 170px; height: 170px; position: absolute; top: -18px; left: -20px" loop autoplay>
            </tgs-player>
        </div> -->

        <div class="login-title">
            <span id="enterCode_phone">{{ phoneNumber }}</span></br>
            <!-- <span id="enterCode_phone">{{ phoneCodeHash }}</span> -->

            <div id="enterCode_backButtonContainer">
                <a id="enterCode_backButton" class="btn btn-light btn-circle"></a>
            </div>
        </div>

        <div class="login-text">
            We have sent you an SMS with the code.
        </div>

        <div id="enterCode_inputContainer" class="input-container">
            <input id="enterCode_input" type="text" placeholder="Code" maxlength="5" v-model="code">
            <label for="enterCode_input">Code</label>
        </div>

        <button id="enterCode_button" @click="signIn">Enter Code</button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
import component from 'vue-class-component'
import { mapState } from 'vuex'
import router from '../router'

@component({
  computed: {
    code: {
      get() {
        return this.$store.state.code
      },
      set(value) {
        this.$store.commit('updateCode', value)
      }
    },
    ...mapState(['phoneNumber', 'phoneCodeHash'])
  }
})
export default class EnterCode extends Vue {
  phoneNumber
  phoneCodeHash
  code
  $telegramApi

  signIn() {
    const { dispatch } = this.$store
    this.$telegramApi.signIn(this.code, this.phoneNumber, this.phoneCodeHash).then(auth => {
        dispatch('setUser', auth.user)
        router.push('/main')
    }).catch(e => {
        console.error(e);
    });
  }
}
</script>