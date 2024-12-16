describe('Login', () => {

    it('Login com credenciais válidas', () => {
      cy.visit('/login');
      cy.get('#email').type('joao@example.com');
      cy.get('#senha').type('senha123');
      cy.get('button').contains('Entrar').click();
      cy.url().should('include', '/home');
    });
  
    it('Login com senha inválida', () => {
      cy.visit('/login');
      cy.get('#email').type('joao@example.com');
      cy.get('#senha').type('senha_errada');
      cy.get('button').contains('Entrar').click();
      cy.contains('Credenciais inválidas').should('be.visible');
    });
  
  });
  