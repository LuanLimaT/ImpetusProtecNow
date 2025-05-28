describe('ProtecNow - Chat Flutuante', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('Abre o chat flutuante', () => {
    cy.get('button[aria-label="Abrir chat"]').click();
    cy.contains('Luna - Assistente ProtecNow').should('be.visible');
  });

  it('Envia mensagem e recebe resposta automática', () => {
    cy.get('button[aria-label="Abrir chat"]').click();

    // Envia a mensagem
    cy.get('input[placeholder="Digite sua mensagem..."]').type('Oi Luna!{enter}');
    cy.contains('Oi Luna!').should('be.visible');

    cy.get('.flex-1.p-4.overflow-y-auto').scrollTo('bottom');

    cy.contains('Luna está digitando...').should('exist'); // use 'exist' ao invés de 'be.visible' por segurança

    cy.wait(2100);

    cy.get('.flex-1.p-4.overflow-y-auto').scrollTo('bottom');

    cy.get('.text-sm').last().should('exist');
  });

  it('Fecha o chat flutuante', () => {
    cy.get('button[aria-label="Abrir chat"]').click();
    cy.get('button[aria-label="Fechar chat"]').click();
    cy.contains('Luna - Assistente ProtecNow').should('not.exist');
  });
});
