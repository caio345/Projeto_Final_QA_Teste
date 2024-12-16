describe('Busca de Produtos', () => {

    it('Busca por produto existente', () => {
      cy.visit('/');
      cy.get('#barra-busca').type('Camiseta{enter}');
      cy.contains('Lista de produtos').should('be.visible');
    });
  
    it('Busca por produto inexistente', () => {
      cy.visit('/');
      cy.get('#barra-busca').type('ProdutoInexistente{enter}');
      cy.contains('Nenhum produto encontrado').should('be.visible');
    });
  
  });
  