import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I browse on a {string}", (viewport) => {
  cy.viewport(viewport);
});

Given("I visit {string}", (url) => {
  cy.visit(url);
  // cy.log("Verify <h1> is visible")
  // cy.get("h1").should("be.visible");
  // button Request demo
  // cy.log("Verify button request demo is visible")
  // cy.get(".hd-button--text").should("be.visible");
  // buton Sign in
  // cy.log("Verify button Sign in is visible")
  // cy.get("#publicHeaderButtons > .hd-button--medium").should("be.visible");
  // cy.wait(1000)

});

// 
// When("I change country to {string}", (country) => {
  // cy.changeCountry(country);
// });
// 
// When("I go to category of {string}", (category) => {
  // cy.openCategory(category);
// });
