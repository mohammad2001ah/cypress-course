/// <reference types="Cypress"/>

/**
 * describe is a function to put test case in suite
 * tack 2 parameter 
 * describe("name functionality", function {
    * it ("test case name", function(){
    * step to execute test case
    * })
 * })
 * 
 * 
 * 
 * it -> describe a test case in mocha
 * it is a function in mocha to billed a test case 
 * tack 2 parameter
 * it ("test case name", function(){
 * step to execute test case
 * })
 */

//Login functionality
describe("Login functionality",()=>{

  /**
   * tack one argument function
   * run once before all test case in the describe block
   * 
   */
  before(()=> {
    cy.log("I'm Inside the Before Hook");
  });

  /**
   *it will execute before all and every test case 
   *if we have 5 test case it will execute 5 times
   */
  beforeEach(()=> {
    cy.log("I'm Inside the Before Each Hook");
  });

  /**
   * it will execute once after all test case in the describe block
   */
  after(()=> {
    cy.log("I'm Inside the After Hook");
  });

  /**
   *it will execute after all and every test case 
   *if we have 5 test case it will execute 5 times
   */
  afterEach(()=> {
    cy.log("I'm Inside the After Each Hook");
  });


  it("Test Case #1: should login  with valid email and password correctly",function(){
    cy.log("should login  with valid email and password correctly");
  });
  
  it("Test Case #2: should not login if the user name is wrong", ()=>{
    cy.log("I'm inside a test case")
  });
  
  it("Test Case #3: Should be able to rest the password ", ()=>{
    cy.log("I'm inside a test case ")
  });
  
  it("Test Case #4: should not login if the user name is wrong", ()=>{
    cy.log("I'm inside a test case ")
  });
  
});

//Order functionality
describe("Order functionality",()=>{
  it("Test Case #1: should be able to order a new food", ()=>{
    cy.log("I'm inside a test case ")
  });

});
