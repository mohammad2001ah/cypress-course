it("async behavior", () => {
  let message = "Hello from Cypress";
  cy.visit("cypress/index.html");
  cy.get("#welcome").invoke("text").then(text => {
    message = text;
    
  }).then(() => {cy.log(message);});
});
/**
 * summary: Cypress commands are asynchronous and return "chainables".
 * This means you cannot directly assign their results to variables
 * outside of a `.then()` callback. Always handle Cypress command results
 * within `.then()` to ensure proper execution order.
 * task: Demonstrate the asynchronous nature of Cypress commands
 * and the correct way to handle their results using `.then()`.
 * description: This test visits a page, retrieves text from an element,
 * and logs it to the console, illustrating the correct handling of
 * asynchronous Cypress commands.
 * tags: [asynchronous, Cypress commands, .then(), variable scope]
 */