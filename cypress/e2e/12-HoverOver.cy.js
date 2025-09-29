it('hover over command', () => {
  cy.visit('cypress/index.html');
  cy.get(".trigger").trigger("mouseover");
});

it('hover out command', () => {
  cy.visit('cypress/index.html');
  cy.get(".trigger").trigger("mouseleave");
});
it.only('long press command', () => {
  cy.visit('cypress/index.html');
  cy.get(".trigger").trigger("mouseover");
  cy.get(".trigger").trigger("mousedown");
  cy.wait(10000);
  cy.get(".trigger").trigger("mouseup");
});
