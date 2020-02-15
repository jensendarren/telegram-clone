<template>
  <div>
    <h3>{{ phoneNumber }}</h3>
    <h4>Welcome, <span>{{ user.first_name }}</span> <span>{{ user.last_name }}</span></h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import Component from 'vue-class-component'

@Component({
  computed: {
    ...mapState(['phoneNumber', 'user'])
  }
})
export default class Main extends Vue {
  $appName
}
</script>