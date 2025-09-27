//select command
it.only('select commands', () =>{
  cy.visit("cypress/index.html");
  // Select an option from a dropdown using the select command by text or value
  cy.get("#courses").select("selenium");
  // Select an option from a dropdown using the select command by index
  cy.get("#courses").select(2);
  
  // We can select any option from a dropdown using the select command
  // We can select an option by text, index and by value
  // More Information --> https://docs.cypress.io/api/commands/select
});