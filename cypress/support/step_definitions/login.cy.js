import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../page_objects/loginPage';

Given('I am on the login page', () => {
  cy.visit('/');
});

When('I enter {string} and {string}', (username, password) => {
  LoginPage.fillUsername(username)
  LoginPage.fillPassword(password)
});

When('I click on the login button', () => {
  LoginPage.clickLoginButton()
});

Then('I should be redirected to the inventory page', () => {
  cy.verifyURL('inventory.html')
});

/* ==============  LOCKED CREDENTIALS ============== */

Then('I should see the error message {string}', (expectedMessage) => {
  cy.showErrorMessage(expectedMessage)
});

Then('I should remain on the login page', () => {
  cy.verifyURL('https://www.saucedemo.com/')
});


