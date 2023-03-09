const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  "watchForFileChanges": false,
  "defaultCommandTimeout": 10000,
  "pageLoadTimeout":10000,
  "screenshotOnRunFailure": true,
  "viewportWidth": 1600,
  "viewportHeight": 1200,
 

  video: true,
  projectId: 'nrufaq',

  e2e: {

    specPattern: 'cypress/integration/**/*.ts',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
