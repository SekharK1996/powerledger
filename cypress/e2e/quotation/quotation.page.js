class quotationpage {
  requestQuotation() {
    return cy.get('#newquote a');
  }

  retrieveQuotation() {
    return cy.get('#retrieve a');
  }

  quotationBreakdownCover() {
    return cy.get('select#quotation_breakdowncover');
  }

  windScreenRepair() {
    return cy.get(`[id*='quotation_windscreenrepair_']`);
  }

  quotationIncidents() {
    return cy.get(`#quotation_incidents`);
  }

  vehicleRegistration() {
    return cy.get(`#quotation_vehicle_attributes_registration`);
  }

  annualMileage() {
    return cy.get(`#quotation_vehicle_attributes_mileage`);
  }

  estimatedValue() {
    return cy.get(`#quotation_vehicle_attributes_value`);
  }

  parkingLocation() {
    return cy.get('select#quotation_vehicle_attributes_parkinglocation');
  }

  day() {
    return cy.get(`select[name='date']`);
  }

  month() {
    return cy.get(`select[name='month']`);
  }

  year() {
    return cy.get(`select[name='year']`);
  }

  insuranceDiscount() {
    return cy.get('#calculatedpremium');
  }

  quotationNumber() {
    return cy.get('body');
  }

  labelQuotationNumber() {
    return cy.get(`input[name='id']`);
  }

  viewBreakDownCover() {
    return cy.get(`tbody > tr:nth-child(2) > td:nth-child(2)`);
  }

  viewWindScreenRepair() {
    return cy.get(`tbody > tr:nth-child(3) > td:nth-child(2)`);
  }

  viewIncidents() {
    return cy.get(`tbody > tr:nth-child(5) > td:nth-child(2)`);
  }

  viewRegistration() {
    return cy.get(`tbody > tr:nth-child(6) > td:nth-child(2)`);
  }

  viewAnnualMileage() {
    return cy.get(`tbody > tr:nth-child(7) > td:nth-child(2)`);
  }

  viewEstimatedValue() {
    return cy.get(`tbody > tr:nth-child(8) > td:nth-child(2)`);
  }

  viewParkingLocation() {
    return cy.get(`tbody > tr:nth-child(9) > td:nth-child(2)`);
  }

  viewStartOfPolicy() {
    return cy.get(`tbody > tr:nth-child(10) > td:nth-child(2)`);
  }

  calculatePremium() {
    return cy.get(`input[value='Calculate Premium']`);
  }

  retrieve() {
    return cy.get(`input[value='Retrieve']`);
  }

  saveQuotation() {
    return cy.get(`input[value='Save Quotation']`);
  }
}

const quotation = new quotationpage();

export default quotation;
