//focus and blur
it('focus command', () => {
  cy.visit('cypress/index.html');
  cy.get(".focus.blur").focus();
});
it.only('Blur command', () => {
  cy.visit('cypress/index.html');
  cy.get(".focus.blur").focus();
  cy.get(".focus.blur").blur();
});
/**
 * summary
 * focus and blur command
 * we use focus command to focus on the element
 * we use blur command to remove focus from the element
 */