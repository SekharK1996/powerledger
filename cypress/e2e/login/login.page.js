class loginpage {
  username() {
    return cy.get('#email');
  }
  password() {
    return cy.get('#password');
  }
  login() {
    return cy.get("[name='submit']");
  }
  message() {
    return cy.get('form span b');
  }
}

const login = new loginpage();
export default login;
