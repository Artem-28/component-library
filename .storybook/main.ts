import type {StorybookConfig} from "@storybook/vue-webpack5";

const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  webpackFinal: async (config) => {
    config.module = {...config.module};
    const rules = [
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ],
        include: path.resolve(__dirname, '../'),
      },
    ]
    if (!config.module.rules) {
      config.module.rules = rules;
    } else {
      config.module.rules = [...config.module.rules, ...rules]
    }
    return config;
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
