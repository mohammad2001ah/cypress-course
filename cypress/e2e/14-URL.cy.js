it("get URL",()=>{
  cy.visit("cypress/index.html");
  //get the URL of the page
  cy.url().should("contain","cypress/index.html");
});