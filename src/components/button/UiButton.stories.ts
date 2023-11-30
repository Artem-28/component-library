import type { Meta, StoryObj } from '@storybook/vue'

import UiButton from './UiButton.vue'

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiButton },
    template: '<ui-button v-bind="$props" color="primary" />',
  })
}
export default meta

type Story = StoryObj<typeof UiButton>

export const Primary: Story = {
  // render: (args, { argTypes }) => ({
  //   components: { UIButton },
  //   props: Object.keys(argTypes),
  //   template: '<UIButton v-bind="$props" />'
  // }),
  // args: {
  //   background: '#ff0',
  //   label: 'Button'
  // }
}
