it("check commands",()=>{
  cy.visit("/cypress/index.html");
  //check the checkbox
  cy.get("#Nuts").check();
  /*cy.get("#Nuts").check({force:true});*/

  //check the radio button
  cy.get("#Tester").check();

  //uncheck the checkbox
  cy.get("#Nuts").uncheck();
  /*
  uncheck radio button
  checkbox only
  cy.get("#Tester").uncheck();
  */

   // We can check a checkbox or a radio button using the check command
  // We can uncheck the checkbox using the uncheck command
  // We can force the checking by adding an option.
  // .check() requires the element to have type checkbox or radio
  // .check() will automatically wait for the element to reach an actionable state
  // More Information --> https://docs.cypress.io/api/commands/check#Rules

}
);