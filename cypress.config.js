const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  video: false,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    stepDefinitions: "cypress/support/step_definitions/**/*.js",

    async setupNodeEvents(on, config) {

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      config.env.filterSpecs = true;
      config.env.omitFiltered = true;
      return config;
    },
  },
});
