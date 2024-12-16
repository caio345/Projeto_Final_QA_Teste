describe('Cadastro de Usuário', () => {
  
    it('Cadastro com dados válidos', () => {
      cy.visit('/register');
      cy.get('#nome').type('João Silva');
      cy.get('#email').type('joao@example.com');
      cy.get('#senha').type('senha123');
      cy.get('button').contains('Registrar').click();
      cy.contains('Mensagem de sucesso').should('be.visible');
    });
  
    it('Cadastro com email já registrado', () => {
      cy.visit('/register');
      cy.get('#nome').type('Maria Souza');
      cy.get('#email').type('joao@example.com'); // Email já existente
      cy.get('#senha').type('senha123');
      cy.get('button').contains('Registrar').click();
      cy.contains('Email já está em uso').should('be.visible');
    });
  
  });
  