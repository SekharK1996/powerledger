import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import quotation from './quotation.page';
import userdetails from '../../fixtures/login_details.json';
import login from '../login/login.page';

beforeEach(() => {
  Cypress.on('uncaught:exception', (_err, _runnable) => false);
  cy.visit('/');
  login.username().type(userdetails.username);
  login.password().type(userdetails.password);
  login.login().click();
  cy.visit('/header.php');
});

Given('I visit to Request Quotation Page', () => {
  quotation.requestQuotation().click();
  quotation.calculatePremium().should('be.visible');
});

Given('I visit to Retrieve Quotation Page', () => {
  cy.visit('/header.php');
  quotation.retrieveQuotation().click();
  quotation.retrieve().should('be.visible');
});

When('I enter the Break Down Cover as {}', (breakDownCover) =>
  quotation.quotationBreakdownCover().select(breakDownCover),
);

When('I enter the Wind Screen Repair as {}', (repair) =>
  quotation
    .windScreenRepair()
    .eq(repair === 'YES' ? 0 : 1)
    .click(),
);

When('I enter the Incident detail as {}', (incident) =>
  quotation.quotationIncidents().type(incident),
);

When('I enter the Registration Number as {}', (number) =>
  quotation.vehicleRegistration().type(number),
);

When('I enter the Annual Mileage as {}', (mileage) =>
  quotation.annualMileage().type(mileage),
);

When('I enter the Estimated Value as {}', (value) =>
  quotation.estimatedValue().type(value),
);

When('I enter the Parking Location as {}', (location) =>
  quotation.parkingLocation().select(location),
);

When('I enter the Policy Date as {} {} {}', (year, month, day) => {
  quotation.day().select(day);
  quotation.month().select(month);
  quotation.year().select(year);
});

Then('I should see my insurance discount', () =>
  quotation.insuranceDiscount().should('not.be.empty'),
);

Then('I should my Quotation is saved', () =>
  cy.url().should('contain', 'new_quotation.php'),
);

When('I enter my {}', (quotationNumber) =>
  quotation.labelQuotationNumber().type(quotationNumber),
);

Then('I click on Calculate Premium button', () =>
  quotation.calculatePremium().click(),
);

Then('I click on Save Quotation button', () =>
  quotation.saveQuotation().click(),
);

Then('I should see the retrieve quotaiton page display', () => {
  quotation.viewIncidents().should('be.visible');
  quotation.viewRegistration().should('be.visible');
  quotation.viewAnnualMileage().should('be.visible');
  quotation.viewEstimatedValue().should('be.visible');
  quotation.viewParkingLocation().should('be.visible');
  quotation.viewStartOfPolicy().should('be.visible');
  quotation.viewBreakDownCover().should('be.visible');
  quotation.viewWindScreenRepair().should('be.visible');
});

Then('I click on Retrieve button', () => quotation.retrieve().click());
