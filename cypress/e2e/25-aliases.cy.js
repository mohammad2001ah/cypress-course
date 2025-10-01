it("Aliases in cypress", () => {
  cy.visit("cypress/index.html");
  cy.url().as('url');

  cy.get("@url");
});
it("Aliases in cypress", () => {
  cy.visit("cypress/index.html");
  cy.url().as('url');
  cy.get("@url").should("contain", "index.html");
});

//1- in aliases we have access just in the test cases
//If we define aliases in a test case, we must use them in the same test case and not another one.
it("Aliases in cypress", () => {
  cy.visit("cypress/index.html");
  cy.url().as('url');
});
it("Aliases in cypress", () => {
  cy.get("@url").should("contain", "index.html");
});
// in this case the output will be undefined because the alias is defined in another test case

describe.only("Aliases in cypress", () => {
  beforeEach(() => {
    cy.visit("cypress/index.html");
    cy.url().as('url');
  });
  it("TC #1 :", () => {
    cy.get("@url").should("contain", "index.html");
  });
  it("TC #2 :", () => {
    cy.get("@url").should("contain", "index.html");
  });
});