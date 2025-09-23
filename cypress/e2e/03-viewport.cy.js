it("should be able to open a website in different views",()=>{
  //we can use cy.viewport to set the width and height of the test runner
  //
  cy.viewport(550, 750); 
  cy.visit('cypress/index.html');
});