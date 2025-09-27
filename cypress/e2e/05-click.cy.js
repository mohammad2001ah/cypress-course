it('click commands', () =>{
  cy.visit("cypress/index.html");
  //click command
  cy.get(".invoice-button").last().click();
  //click at specific coordinates
  cy.get(".invoice-button").last().click('bottomLeft');
  //click multiple elements
  cy.get(".invoice-button").click({multiple:true});
  //we can click on hidden elements by force true
  cy.get(".hidden-button").click({force:true});

  /**summary
   * we can click on an element using the click command
   * we can click at specific coordinates using the click command
   * we can click on multiple elements using the click command with the multiple option set to true
   * we can click on hidden elements using the click command with the force option set to true
   */
});