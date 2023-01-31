class profilepage {
  profile() {
    return cy.get('#profile a');
  }

  edit() {
    return cy.get('#editprofile a');
  }

  title() {
    return cy.get('#user_title');
  }

  surname() {
    return cy.get(`#user_surname`);
  }

  firstname() {
    return cy.get(`#user_firstname`);
  }

  phone() {
    return cy.get(`#user_phone`);
  }

  licenseType() {
    return cy.get(`input[id*='user_licencetype_']`);
  }

  day() {
    return cy.get(`#user_dateofbirth_3i`);
  }

  month() {
    return cy.get(`#user_dateofbirth_2i`);
  }

  year() {
    return cy.get(`#user_dateofbirth_1i`);
  }

  licensePerios() {
    return cy.get(`#user_licenceperiod`);
  }

  occupation() {
    return cy.get(`#user_occupation_id`);
  }

  street() {
    return cy.get('#user_address_attributes_street');
  }

  city() {
    return cy.get('#user_address_attributes_city');
  }

  country() {
    return cy.get('#user_address_attributes_county');
  }

  postalcode() {
    return cy.get('#user_address_attributes_postcode');
  }

  viewtitle() {
    return cy.get('#showtitle');
  }

  viewfirstName() {
    return cy.get('#showfirstname');
  }

  viewsurname() {
    return cy.get('#showsurname');
  }

  viewphone() {
    return cy.get('#showphone');
  }

  viewdateOfBirth() {
    return cy.get('#showdateofbirth');
  }

  viewlicenseType() {
    return cy.get('#showlicencetype');
  }

  viewlicensePeriod() {
    return cy.get('#showlicenceperiod');
  }

  viewoccupation() {
    return cy.get('#showoccupation');
  }

  viewdriverHistory() {
    return cy.get('#showincidents');
  }

  viewstreet() {
    return cy.get('#showstreet');
  }

  viewcity() {
    return cy.get('#showcity');
  }

  viewcountry() {
    return cy.get('#showcounty');
  }

  viewpostCode() {
    return cy.get('#showpostcode');
  }

  update() {
    return cy.get(`input[value='Update User']`);
  }
}

const profile = new profilepage();

export default profile;
