<template>
  <component
    :is="type"
    :class="rootClasses"
    :disabled="disabled"
    @mouseover="__mouseoverHandle"
    @mouseout="__mouseoutHandle"
    @click="__clickHandle"
  >
    <span class="ui-button__wrapper" :class="outlineColorClass" >
      <span class="ui-button__content">
        <slot>
          <span v-if="hasLabel" class="ui-button__label" :class="textColorClass" v-text="label" />
        </slot>
      </span>
    </span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import buttonMixin from '../../mixins/button.mixin'

export default Vue.extend({
  name: 'UiButton',
  mixins: [buttonMixin],
  methods: {
    __clickHandle (e: PointerEvent): void {
      if (this.disabled) return
      this.$emit('click', e)
    }
  }
})
</script>

<style src="./UiButton.scss" lang="scss"></style>
