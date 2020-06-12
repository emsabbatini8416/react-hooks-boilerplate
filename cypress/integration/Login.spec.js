describe('Log In', () => {
    it('succesfully performs login action', () => {
      // visit 'baseUrl'
      cy.visit('/');
      // assert if we are in good place - search for a 'smarter world phrase
      cy.contains('Login');
      cy.get('input[name="username"]').type('test@email.com');
      cy.get('input[name="password"]').type('password');
      cy.get('input[type="submit"]').click();
    });
  });