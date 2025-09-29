//We use the should command to confirm the state of the element.
//the element is visible or not based on the specific condition

//should be visible
it("Should be visible command",()=>{
  cy.visit("cypress/index.html");
  //check if the element is visible
  cy.get('#courses').should("be.visible");
});

//not be visible
it("Should be visible command",()=>{
  cy.visit("cypress/index.html");
  //check if the element is not visible
  cy.get('#courses').should("not.be.visible");
});

it("Should have text command",()=>{
  cy.visit("cypress/index.html");
  //check if the element has the specific text
  cy.get('#welcome').should("have.text","Welcome to Cypress Tutorials");
});
//contains command
it("Should contains command",()=>{
  cy.visit("cypress/index.html");
  //check if the element has the specific word in the text
  cy.get('#welcome').should("contain","Welcome to");
});

//should have class
it("Should have class command",()=>{
  cy.visit("cypress/index.html");
  //check if the element has the specific class
  cy.contains("wdio").should("have.class","web");
});

//have css property
it("Should have css command",()=>{
  cy.visit("cypress/index.html");
  //check if the element has the specific css property
  cy.get('.focus').focus().should("have.css", "background-color", "rgb(255, 0, 0)");
});

//have attribute
it.only("Should have attribute command",()=>{
  cy.visit("cypress/index.html");
  //check if the element has the specific attribute
  cy.get(".invoice-button").first().should("have.attr","type","button");
});
