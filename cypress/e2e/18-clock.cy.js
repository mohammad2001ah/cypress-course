//clock command
it("Clock command",()=>{
  //set time before visiting the page
  //mock the date to a specific point in time
  const now= new Date('2023,05,11');
  cy.clock(now);
  cy.visit("cypress/index.html");
});