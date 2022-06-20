import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When(/^I visit parabank\.parasoft\.com\/parabank\/index\.htm$/, () => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm');
});

Then('I should see a login form', () => {
  cy.get('#leftPanel > h2').should('have.text', 'Customer Login');
});