it("then command",()=>{
  cy.visit("cypress/index.html");
  cy.get("#welcome")
  .invoke("text").then(text=>{
    cy.log(text);
  });
});
/**
 * summary
 * - then command
 * - difference between then and should
 * - using then to work with jquery elements
 * - using then to create conditional tests
 * - using then to resolve promises
 * - using wrap to change the subject
 */