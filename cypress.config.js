const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'C:/Users/romul/OneDrive/Documentos/GitHub/S206-L1/cypress/reports',
      overwrite: false,
      html: true,
      json: false,
    },
    
  },
});
