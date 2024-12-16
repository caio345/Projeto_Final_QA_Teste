describe('API de Cadastro', () => {

    it('Cadastro com dados válidos', () => {
      cy.request('POST', '/api/cadastro', {
        nome: 'João Silva',
        email: 'novoemail@example.com',
        senha: 'senha123'
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.mensagem).to.eq('Usuário cadastrado com sucesso');
      });
    });
  
    it('Cadastro com email já registrado', () => {
      cy.request({
        method: 'POST',
        url: '/api/cadastro',
        failOnStatusCode: false,
        body: {
          nome: 'Maria Souza',
          email: 'joao@example.com',
          senha: 'senha123'
        }
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.mensagem).to.eq('Email já cadastrado');
      });
    });
  
  });
  