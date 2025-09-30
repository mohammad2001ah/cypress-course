it("Wrap command",()=>{
  const student={
    name:"Mohammad",
    family:"Abu Alhijaa",
    age:24,
    isQA:true,
    isWatching: ()=>{
    console.log("he is watching");
  }
  }; 
  cy.visit("cypress/index.html");
  const message = 'Welcome to QAcart';

  cy.visit('cypress/index.html');
  cy.wrap(student).should('have.property', 'name', 'Mohammad');
  cy.wrap(message).should('eql', 'Welcome to QAcart');
});
/**
 * Summary
 * This test shows how to use `cy.wrap()` in Cypress.
 * We make a `student` object with some info (name, family, age, etc.).
 * Then we "wrap" the object with `cy.wrap()`.
 * After that, we can check (assert) the values inside the object,
 * for example: the name should be "Mohammad".
 */