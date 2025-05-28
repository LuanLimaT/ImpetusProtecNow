describe('ProtecNow - Header e Navegação', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3002');
  });

  it('Deve mostrar o nome da marca no header', () => {
    cy.get('header').contains('ProtecNow').should('be.visible');
  });

  it('Deve navegar para seção Sobre ao clicar no menu', () => {
    cy.contains('Sobre').click();
    cy.url().should('include', '#sobre'); // Ajuste se for SPA ou não rola scroll na URL
    cy.get('section#sobre').should('be.visible');
  });

  it('Deve navegar para Planos', () => {
    cy.contains('Planos').click();
    cy.get('section#servicos').should('be.visible');
  });

  it('Deve navegar para Depoimentos', () => {
    cy.contains('Depoimentos').click();
    cy.get('section#depoimentos').should('be.visible');
  });
});
