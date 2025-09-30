it("Wrap and its command",()=>{
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
  cy.wrap(student).its("name").should("eql","Mohammad");
});
/**
 * Summary
 * This test shows how to use `cy.its()` in Cypress.
 * We make a `student` object with some info (name, family, age, etc.).
 * Then we "wrap" the object with `cy.wrap()`.
 * After that, we use `its()` to get the value of the "name" property
 * and check (assert) that it equals "Mohammad".
 */