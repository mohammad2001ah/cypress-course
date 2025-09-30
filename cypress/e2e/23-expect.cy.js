//expect commands
it("Expect commands", () => {
  cy.visit("cypress/index.html");
  cy.get("#welcome").invoke("text").then(returnedText => {
    expect(returnedText).to.eql("Welcome to Cypress Tutorials");
  });
});
/**
 * summary: >
 *  This code is a Cypress end-to-end test that verifies the text content of an HTML element with the ID "welcome" on a webpage.
 * The test visits a specified URL, retrieves the text of the element, and asserts that it matches the expected string "Welcome to Cypress Tutorials" using the `expect` command.
 * The test ensures that the webpage displays the correct welcome message to users.
 */