describe('ProtecNow - Planos de Serviço', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('Deve exibir todos os planos', () => {
    cy.contains('Seguro Básico').should('be.visible');
    cy.contains('Seguro Completo').should('be.visible');
    cy.contains('Seguro Premium').should('be.visible');
    cy.contains('Seguro Moto').should('be.visible');
  });

  it('Deve exibir o destaque "MAIS POPULAR" no plano correto', () => {
    cy.contains('MAIS POPULAR').should('be.visible');
  });

  it('Todos os planos devem ter botão "Contratar Agora"', () => {
    cy.get('button').contains('Contratar Agora').should('have.length.at.least', 1);
  });
});
