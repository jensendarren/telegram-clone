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
            <span id="enterCode_phone">+33 1 23 45 67 89</span>

            <div id="enterCode_backButtonContainer">
                <a id="enterCode_backButton" class="btn btn-light btn-circle"></a>
            </div>
        </div>

        <div class="login-text">
            We have sent you an SMS with the code.
        </div>

        <div id="enterCode_inputContainer" class="input-container">
            <input id="enterCode_input" type="text" placeholder="Code" maxlength="5">
            <label for="enterCode_input">Code</label>
        </div>
      </div>
    </div>
  </div>
</template>
