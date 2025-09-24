// This test demonstrates how to use different viewports in Cypress tests
['iphone-6+','ipad-mini','macbook-15'].forEach(viewport=>{ 
  it("should be able to open a website in different views",()=>{
    //we can use cy.viewport to set the width and height of the test runner
    cy.viewport(viewport);
    cy.visit('cypress/index.html');
  });
});

