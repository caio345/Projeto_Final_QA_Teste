describe('API de Login', () => {

    it('Login com credenciais válidas', () => {
      cy.request('POST', '/api/login', {
        email: 'joao@example.com',
        senha: 'senha123'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.token).to.exist;
      });
    });
  
    it('Login com credenciais inválidas', () => {
      cy.request({
        method: 'POST',
        url: '/api/login',
        failOnStatusCode: false,
        body: {
          email: 'joao@example.com',
          senha: 'senha_errada'
        }
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.mensagem).to.eq('Credenciais inválidas');
      });
    });
  
  });
  