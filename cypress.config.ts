import { defineConfig } from "cypress";
import codeCoverageTask from '@cypress/code-coverage/task';
import useBabelrc from '@cypress/code-coverage/use-babelrc';

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        mode: "development",
        devtool: false,
      },
    },
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config)
      on('file:preprocessor', useBabelrc)
      return config
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    env: {
      codeCoverage: {
        url: "http://localhost:3000/api/__coverage__",
        coverage: true
      }
    }
  },
});
