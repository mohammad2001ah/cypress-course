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
}
);