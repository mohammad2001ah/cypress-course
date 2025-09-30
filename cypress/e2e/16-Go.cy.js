//go command used to navigate to a specific URL
it("Go command",()=>{
  cy.visit("cypress/index.html");
  cy.get(".about").click();
  cy.go("back");
  cy.go("forward")
});
// it("Go command with assertions", () => {
//   cy.visit("cypress/index.html");

//   cy.get(".about").click();
//   cy.url().should("include", "about"); // اتأكد انه راح على صفحة about

//   cy.go("back");
//   cy.url().should("include", "index"); // اتأكد انه رجع

//   cy.go("forward");
//   cy.url().should("include", "about"); // اتأكد انه تقدم
// });