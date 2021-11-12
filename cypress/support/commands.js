// // // ***********************************************
// // // This example commands.js shows you how to
// // // create various custom commands and overwrite
// // // existing commands.
// // //
// // // For more comprehensive examples of custom
// // // commands please read more here:
// // // https://on.cypress.io/custom-commands
// // // ***********************************************
// // //
// // //
// // // -- This is a parent command --
// // // Cypress.Commands.add("login", (email, password) => { ... })
// // //
// // //
// // // -- This is a child command --
// // // Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
// // //
// // //
// // // -- This is a dual command --
// // // Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
// // //
// // //
// // // -- This will overwrite an existing command --
// // // Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";
// import "cypress-wait-until";

Cypress.Commands.add("checkElementVisible", (selector) => {
  cy.wait(1000);
  cy.get("body").then((body) => {
    if (body.find(selector).length > 0) {
      return true;
    } else {
      return false;
    }
  });
});


Cypress.Commands.add("lazyLoadPage", () => {
  cy.scrollTo("bottom", { duration: 2000 });
});

Cypress.Commands.add("checkResponsiveAllDevices", () => {
  // check responsive all devices
  cy.wait(1000);
  cy.viewport('ipad-2');
  cy.wait(1000);

  cy.viewport('iphone-5');
  cy.wait(1000);

  cy.viewport('iphone-6');
  cy.wait(1000);

  cy.viewport('iphone-7');
  cy.wait(1000);

  cy.viewport('iphone-8');
  cy.wait(1000);

  cy.viewport('iphone-x');
  cy.wait(1000);

  cy.viewport('iphone-xr');
  cy.wait(1000);

  cy.viewport('samsung-s10');
  cy.wait(1000);

  cy.viewport('samsung-note9');
  cy.wait(1000);

});

Cypress.Commands.add("doLogIn", () => {
  let loginURL = Cypress.env('login')
  cy.visit(loginURL)
  // do logout first if you already logged in before
  cy.checkElementVisible(eleSignIn.nameWorkspace).then((r) => {
    let isVisible = r;
    if (isVisible) {

      cy.doLogOut();
      cy.wait(1000);
      cy.visit(loginURL);
      cy.wait(2000)

    }
  });

  cy.fixture('users').then((account) => {
    cy.get(eleSignIn.inputEmail).type(account.email);
  })
  cy.get(eleSignIn.btnContinue).click();
  cy.wait(1000)
  cy.fixture('users').then((account) => {
    cy.get(eleSignIn.codeOTP).type(account.otp);
  })
  cy.get(eleSignIn.btnLogin).click();
  cy.wait(3000);

});
  