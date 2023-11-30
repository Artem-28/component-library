import type { Preview } from "@storybook/vue";
import '!style-loader!css-loader!sass-loader!../src/assets/style/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark-secondary',
      values: [
        {
          name: 'dark-secondary',
          value: 'rgba(24, 27, 30, 1)',
        },
        {
          name: 'dark-primary',
          value: 'rgba(34, 38, 42, 1)',
        },
      ],
    },
  },
};

export default preview;
