describe('ProtecNow - Modal de Checkout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('Abre o modal de contratação ao clicar em "Contratar Agora"', () => {
    cy.contains('Contratar Agora').first().click();
    cy.contains('Finalizar Contratação').should('be.visible');
    cy.get('input[name="nome"]').should('exist');
  });

  it('Preenche o formulário e finaliza a contratação', () => {
    cy.contains('Contratar Agora').first().click();
    cy.get('input[name="nome"]').type('Maria Teste');
    cy.get('input[name="email"]').type('maria@email.com');
    cy.get('input[name="telefone"]').type('11999999999');
    cy.get('input[name="cpf"]').type('12345678900');
    cy.get('input[name="cartao"]').type('1234123412341234');
    cy.get('input[name="validade"]').type('12/29');
    cy.get('input[name="cvv"]').type('123');
    cy.contains('Finalizar Contratação').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.include('Contratação realizada com sucesso');
    });
  });

  it('Fecha o modal ao clicar em "Cancelar"', () => {
    cy.contains('Contratar Agora').first().click();
    cy.contains('Cancelar').click();
    cy.contains('Finalizar Contratação').should('not.exist');
  });
});
