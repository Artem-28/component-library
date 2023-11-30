import Vue, { PropType } from 'vue'
import { EButtonType } from '../types/props'
import { IClass } from '../types/base'

export default Vue.extend({
  props: {
    type: {
      type: String as PropType<EButtonType>,
      default: EButtonType.BUTTON
    },
    label: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    },
    textColor: {
      type: String,
      default: 'white-primary'
    },
    textUppercase: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
    hasLabel (): boolean {
      return !!this.label
    },
    textColorClass () : IClass {
      return {
        [`text-${this.textColor}`]: true
      }
    },
    outlineColorClass () : IClass {
      if (!this.color) {
        return {
          'text-graphite': !this.hover,
          'text-primary-active': this.hover
        }
      }
      return {
        [`text-${this.color}`]: !this.hover,
        [`text-${this.color}-active`]: this.hover
      }
    },
    rootClasses (): IClass {
      return {
        'ui-button': true,
        'ui-button--outline': this.outline,
        'ui-button--disabled': this.disabled,
        [`bg-${this.color}`]: !!this.color,
        'bg-dark-secondary': !this.color,
        'text-uppercase': this.textUppercase
      }
    }
  },
  methods: {
    __mouseoverHandle (e: MouseEvent): void {
      this.$emit('mouseover', e)
      this.hover = !this.disabled && true
    },
    __mouseoutHandle (e: MouseEvent): void {
      this.$emit('mouseout', e)
      this.hover = false
    }
  }
})
