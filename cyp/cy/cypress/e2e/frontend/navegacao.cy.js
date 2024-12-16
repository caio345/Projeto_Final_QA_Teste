describe('Navegação', () => {

    it('Ir para Página principal', () => {
      cy.visit('/');
      cy.get('#icone-home').click();
      cy.url().should('include', '/home');
    });
  
    it('Ir para Página de Carrinho', () => {
      cy.visit('/');
      cy.get('#icone-cart').click();
      cy.url().should('include', '/cart');
    });
  
  });
  