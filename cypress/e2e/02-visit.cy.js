it("it should visit the website correctly",()=>{
  // Visit the website or localhost or html file
    cy.visit('cypress/index.html');
});


it("it should visit the homepage html file correctly",()=>{
  // Visit the website
    cy.visit('https://google.com');
});
