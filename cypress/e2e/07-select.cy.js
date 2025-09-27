//select command
it.only('select commands', () =>{
  cy.visit("cypress/index.html");
  cy.get("#courses").select("selenium");

  // We can select any option from a dropdown using the select command
  // We can select an option by text, index and by value
  // More Information --> https://docs.cypress.io/api/commands/select
});