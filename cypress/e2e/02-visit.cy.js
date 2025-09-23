it("it should visit the website correctly",()=>{
  // Visit the website or localhost or html file
  //i cant visit this link because the baseUrl 
  //mentioned in cypress.config.js file is facebook
  //i must write the full path name and it must be 
  //working on the server


    //cy.visit('http://127.0.0.1:3000/cypress/index.htm');
});


it("visit google chrome",()=>{
  // Visit the website
    cy.visit('http://google.com');
});

it("visit facebook",()=>{
  // Visit the website
  //this / refers to baseUrl mentioned in cypress.config.js file
    cy.visit('https://facebook.com');
});

// use qs command
//qs is query string 
it('visit youtube with qs', () => {
  cy.visit('https://youtube.com', {
    qs: {
      mohammad_query: 'cypress testing'
    }
  });
});

//view port command

