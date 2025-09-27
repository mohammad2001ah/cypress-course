it("Right Click command",()=>{
  cy.visit("cypress/index.html");
  cy.get("[value='Click me']").rightclick();
});