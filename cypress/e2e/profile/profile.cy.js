import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import userdetails from '../../fixtures/login_details.json';
import profile from './profile.page';
import login from '../login/login.page';

beforeEach(() => {
  Cypress.on('uncaught:exception', (_err, _runnable) => false);
  cy.visit('/');
  login.username().type(userdetails.username);
  login.password().type(userdetails.password);
  login.login().click();
  cy.visit('/header.php');
});

Given('I visit to Profile Page', () => profile.profile().click());

Given('I visit to Edit Profile Page', () => profile.edit().click());

Then('I should see my profile details', () =>
  profile.viewtitle().should('be.visible'),
);

When('I enter the title as {}', (title) =>
  profile.title().focus().select(title),
);

When('I enter the First name as {}', (name) => profile.firstname().type(name));

When('I enter the Surname as {}', (surname) => profile.surname().type(surname));

When('I enter the Phone as {}', (phone) => profile.phone().type(phone));

When('I enter the Date Of Birth as {} {} {}', (year, month, day) => {
  profile.day().select(day);
  profile.month().select(month);
  profile.year().select(year);
});

When('I enter the License Type as {}', (type) =>
  profile
    .licenseType()
    .eq(type === 'Full' ? 0 : 1)
    .click(),
);

When('I enter the License Period as {}', (period) =>
  profile.licensePerios().select(period),
);

When('I enter the Occupation as {}', (occupation) =>
  profile.occupation().select(occupation),
);

When(
  'I enter the Address as {} {} {} {}',
  (street, city, country, postcode) => {
    profile.street().type(street);
    profile.city().type(city);
    profile.country().type(country);
    profile.postalcode().type(postcode);
  },
);

When('I click on Update User button', () => profile.update().click());

Then('I should see my profile is updated with {}', (title) => {
  profile.viewtitle().should('be.visible');
  profile.viewtitle().should('contain', title);
});
