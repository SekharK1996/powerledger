import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import login from './login.page';
import dashboard from '../dashboard/dashboard.page';
import userdetails from '../../fixtures/login_details.json';

before(() => {
  Cypress.on('uncaught:exception', (_err, _runnable) => false);
});

Given('I visit the insurance site', () => cy.visit('/'));

When('I enter the invalid {} username', (username) => {
  if (username !== '') login.username().type(username);
});

When('I enter the invalid {} password', (password) => {
  if (password !== '') login.password().type(password);
});

When('I click on Login button', () => login.login().click());
When('I click on Logout button', () => dashboard.logout().click());

Then('I should see the {}', (message) =>
  login.message().should('contain.text', message),
);

Then('I should see the home screen', () => {
  dashboard.email().should('contain', userdetails.username);
  dashboard.logout().should('be.visible');
});

When('I enter the username', () =>
  login.username().clear().type(userdetails.username),
);

When('I enter the password', () =>
  login.password().clear().type(userdetails.password),
);

Then('I should be logged out from app', () => {
  login.username().should('be.visible');
  login.password().should('be.visible');
  login.login().should('be.visible');
});
