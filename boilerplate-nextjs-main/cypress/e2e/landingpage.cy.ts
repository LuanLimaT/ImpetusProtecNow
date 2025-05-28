// cypress/e2e/landingpage.cy.js
describe('ProtecNow LP', () => {
  it('Deve mostrar o header', () => {
    cy.visit('http://localhost:3001');
    cy.contains('ProtecNow').should('be.visible');
  });
});
