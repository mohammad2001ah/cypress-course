//we use get command to find an element in the DOM
//we can find an element by tag name
//or find element with different attributes [class, id](selectors)

it("find element by tag name",()=>{
  cy.visit('cypress/index.html');
  //put the tag name inside the get method
  cy.get('h1');
  cy.get('button');
  cy.get('input');
});

it("find element by ID",()=>{
  cy.visit('cypress/index.html');
  //to find element by ID we use #
  cy.get("#courses");
});

it("find element by class",()=>{
  cy.visit('cypress/index.html');
  //to find element by class we use .
  cy.get(".course-list");
  //in case of compound classes, we use only one class name
  // <li class="list1 web">Cypress</li>
  cy.get(".list1.web");
});

it("find element by attribute",()=>{
  cy.visit('cypress/index.html');
  //to find element by attribute we use []
  //cy.get("[name='Developer']");
  // cy.get("[name='Tester']");
  cy.get('[id="Developer"]');
});


it("find the first element from a list of elements",()=>{
  cy.visit('cypress/index.html');
  //to find the first element from a list of elements we use first()
  cy.get("h1").first();
});


it("find the last element from a list of elements",()=>{
  cy.visit('cypress/index.html');
  //to find the last element from a list of elements we use last()
  cy.get("h1").last();
});

it("find the element from a list of elements by index",()=>{
  cy.visit('cypress/index.html');
  //to find the element from a list of elements by index we use eq(index)
  cy.get("h1").eq(3);
});

//filter command
it.only("find the element from a list of elements by filter",()=>{
  cy.visit('cypress/index.html');
  //to find the element from a list of elements by filter we use filter()
  cy.get("li").filter(".web");
});

