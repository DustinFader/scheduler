describe('Navigation', () => {
  it('should visit route', () => {
    cy.visit('/');
  });

  it('should navigate to tuesday', () => {
    cy.visit('/');
    cy.contains('li', 'Tuesday').as('Tuesday').click();
    cy.get('@Tuesday').should('have.css', 'background-color', 'rgb(242, 242, 242)');
  });
});