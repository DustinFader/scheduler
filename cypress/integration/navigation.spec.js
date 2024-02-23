describe('Navigation', () => {
  it('should visit route', () => {
    cy.visit('/');
  });

  it('should navigate to tuesday', () => {
    cy.visit('/');
    cy.contains('[data-testid=day]', 'Tuesday').click().should('have.class', 'day-list__item--selected');
  });
});