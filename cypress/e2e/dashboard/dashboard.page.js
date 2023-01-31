class dashboardpage {
  email() {
    return cy.get('div.content h4');
  }

  logout() {
    return cy.get(`div.content h4 + form [type='submit']`);
  }
}

const dashboard = new dashboardpage();
export default dashboard;
