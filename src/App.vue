<template>
  <div id="app">
    <div class="section">
      <UiButton label="click me" outline text-uppercase />
    </div>
    <div class="section">
      <UiButton type="a" label="click me" outline color="primary" disabled />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UiButton from '@/components/button/UiButton.vue'

export default Vue.extend({
  name: 'App',
  components: {
    UiButton
  }
})
</script>

<style lang="scss">
body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  background: none;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 26px;
}
.section {
  padding: 26px;
}
</style>
