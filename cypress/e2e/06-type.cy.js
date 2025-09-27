it('type commands', () =>{
  cy.visit("cypress/index.html");
  //we can type on ony input using the type command then we go to the next input using {enter}
  cy.get("#inputEmail").type("mohammad@gmail.com{enter}");
  //we can use {backspace} to remove the last character or all characters using {selectall}{backspace}
  cy.get("#inputEmail").type("{selectall}{backspace}newemail@gmail.com");
});

it.only('type commands', () =>{
  cy.visit("cypress/index.html");
  cy.get("#coverdInput").type("new@gmail.com",{
    force:true,
    delay:1000
  })
  // We can type on any input using the type command
  // We can type on a hidden element using force option
  // We can delay the type command per seconds, this delay will happen between every character in the string
  // We can use some keyboard actions using type --> https://docs.cypress.io/api/commands/type#Arguments

});