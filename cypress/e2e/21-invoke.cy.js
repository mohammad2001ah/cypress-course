it("invoke and wrap command",()=>{
  const student={
    name:"Mohammad",
    family:"Abu Alhijaa",
    age:24,
    isQA:true,
    isWatching: function(){
      return "Hello " + this.name;
  }
  }; 
  cy.visit("cypress/index.html");
  cy.wrap(student).invoke("isWatching").should("contain","Mohammad");
});