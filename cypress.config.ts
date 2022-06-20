import * as browserify from '@cypress/browserify-preprocessor';
import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { preprocessor } from '@badeball/cypress-cucumber-preprocessor/browserify';

export async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    preprocessor(config, {
      ...browserify.defaultOptions,
      typescript: require.resolve('typescript'),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  projectId: 'yr94m4',
  e2e: {
    specPattern: '**/*.feature',
    excludeSpecPattern: '*.js',
    setupNodeEvents,
    supportFile: 'cypress/support/e2e.ts'
  },
});
