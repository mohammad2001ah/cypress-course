it("Aliases in cypress", () => {
  cy.visit("cypress/index.html");
  cy.url().as('url');

  cy.get("@url");
});