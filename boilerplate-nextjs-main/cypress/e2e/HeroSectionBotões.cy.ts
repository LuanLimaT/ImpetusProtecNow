describe('ProtecNow - Hero Section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('Deve exibir o slogan principal', () => {
    cy.contains('Proteja Seu Veículo com Segurança').should('be.visible');
  });

  it('Botão "Fazer Cotação Grátis" deve existir', () => {
    cy.contains('Fazer Cotação Grátis').should('exist');
  });

  it('Botão "Saiba Mais" deve existir', () => {
    cy.contains('Saiba Mais').should('exist');
  });
});
