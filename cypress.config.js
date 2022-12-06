const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vg5cwx",
  e2e: {
    baseUrl:'https://app.getsprout.co/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
