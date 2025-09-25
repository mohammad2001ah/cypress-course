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
it("find the element from a list of elements by filter",()=>{
  cy.visit('cypress/index.html');
  //to find the element from a list of elements by filter we use filter()
  cy.get("li").filter(".web");
});

//find element by children command
it("find the element from a list of elements by children",()=>{
  cy.visit('cypress/index.html');
  //to find the element from a list of elements by children we use children()
  //we can use children() with selector
  cy.get(".course-list").children();
  //we can use children() without selector
  cy.get(".course-list").children(".web");
  cy.get(".course-list").children(".web").first();
  cy.get(".course-list").children(".web").last();
  cy.get(".course-list").children(".web").filter(".list7");
  cy.get(".course-list").children(".web").eq(2);
});

//find element by find command
it("find the element from a list of elements by find",()=>{
  cy.visit('cypress/index.html');
  //we can find  element based on the parent using the find command .find(css selector)
  cy.get(".course-list").find(".web");
});

//find element by parent command
it("find the element using the parent command",()=>{
  cy.visit('cypress/index.html');
  //we find the elemnet using the children we use parent() command
  cy.get(".test1").parent();
  
});

//find element by parents command
it("find the element using the parents command",()=>{
  cy.visit('cypress/index.html');
  //we find the elemnet using the children we use parents() command
  //parents will get all the parents of the element in an array
  cy.get(".list1.web").parents();
});

//find element by siblings command
it("find the element using the siblings command",()=>{
  cy.visit('cypress/index.html');
  //we find the elemnet using the children we use siblings() command
  //siblings will get all the siblings(brother) of the element in an array
  cy.get(".list1.web").siblings();
  cy.get(".list1.web").siblings('.web');
});

//find element by text command
it.only("find the element using the contains command",()=>{
  cy.visit('cypress/index.html');
  //we find the elemnet using the text we use contains() command
  cy.contains("Appium");
  cy.get('li').contains("Cypress");
});


