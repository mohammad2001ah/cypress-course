//get cookies
it("Cookies get Command",()=>{
  cy.visit("cypress/index.html");
  cy.getCookie("course").should("have.property","value","cypress");
});
//set cookies
it("Cookies set Command",()=>{
  cy.visit("cypress/index.html");
  cy.setCookie("level",'all levels');
});

//get all cookies
it.only("Cookies get all Command",()=>{
  cy.visit("cypress/index.html");
  cy.getCookies().should("have.length",2);
});
/**
 * summary
 * This code demonstrates how to use Cypress commands to manage cookies in end-to-end tests.
 * It includes tests for getting a specific cookie, 
 * setting a new cookie, 
 * and retrieving all cookies to verify their count.
 */