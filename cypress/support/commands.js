// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add("login", (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";
// import "cypress-wait-until";
// import fakerUS from "faker/locale/en_US";
// import fakerCA from "faker/locale/en_CA";
// import fakerES from "faker/locale/es";
// import fakerIE from "faker/locale/en_IE";

// addMatchImageSnapshotCommand({
//   customSnapshotsDir: "./cypress/snapshots",
// });

// Cypress.Commands.add("checkElementVisible", (selector) => {
//   cy.wait(3000);
//   cy.get("body").then((body) => {
//     if (body.find(selector).length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// });

// Cypress.Commands.add("randomUserInfo", (country) => {
//   let user;
//   switch (country) {
//     case "US":
//       user = fakerUS;
//       break;
//     case "CA":
//       user = fakerCA;
//       break;
//     case "ES":
//       user = fakerES;
//       break;
//     case "IE":
//       user = fakerIE;
//   }
//   let fullName = user.name.lastName() + " " + user.name.firstName();
//   let email = user.internet.email();
//   let address = user.address.streetAddress();
//   let city = user.address.city();
//   let state = user.address.state();
//   let zipCode = user.address.zipCodeByState(state);
//   let phone = user.phone.phoneNumber();
//   let number = user.datatype.number(9999);
//   return [fullName, email, address, city, state, zipCode, phone, number];
// });

// Cypress.Commands.add("getCard", (cardTypeValue) => {
//   cy.fixture("cardData").then((card) => {
//     let cardData = card.filter((item) => item.CardType === cardTypeValue);
//     console.log("card data", cardData);
//     let cardNumber = cardData[0].CardNumber;
//     let expiredDate = cardData[0].ExpiredDate;
//     let Cvv = cardData[0].Cvv;
//     return [cardNumber, expiredDate, Cvv];
//   });
// });

// Cypress.Commands.add("changeCountry", (country) => {
//   let found = false;
//   let location = "[data-cy='location']";
//   let changeCountry = "li[class*='ChangeCountry'] > button";
//   // cy.autoDetectcountry();
//   cy.get(location)
//     .first()
//     .click();
//   cy.get(changeCountry)
//     .each(($el) => {
//       if ($el.text() === country) {
//         found = true;
//         cy.wrap($el)
//           .first()
//           .click({ force: true });
//         cy.wait(2000);
//       }
//     })
//     .then(() => {
//       if (!found) {
//         // This clause use country code
//         cy.get("[class*='ChangeCountry__select']")
//           .first()
//           .select(country, { force: true });
//         cy.wait(2000);
//       }
//     });
// });

// Cypress.Commands.add("getTextIfPresent", (selector) => {
//   cy.checkElementVisible(selector).then((returnValue) => {
//     const isVisible = returnValue;
//     if (!isVisible) {
//       return 0;
//     } else {
//       cy.get(selector)
//         .first()
//         .invoke("text")
//         .as("textValue");
//       cy.get("@textValue").then((value) => {
//         return value;
//       });
//     }
//   });
// });

// Cypress.Commands.add("parsePrice", (country, priceString) => {
//   let currencySymbol,
//     price = "";
//   switch (country) {
//     case "US":
//     case "EU":
//     case "UK":
//       if (priceString.includes("-")) {
//         currencySymbol = priceString.substring(0, 2);
//         price = priceString.substring(2);
//       } else {
//         currencySymbol = priceString.substring(0, 1);
//         price = priceString.substring(1);
//       }
//       break;
//     case "CA":
//     case "International":
//       if (priceString.includes("-")) {
//         currencySymbol = priceString.substring(0, 4);
//         price = priceString.substring(4);
//       } else {
//         currencySymbol = priceString.substring(0, 3);
//         price = priceString.substring(3);
//       }
//       break;
//   }
//   return [currencySymbol, price];
// });

// Cypress.Commands.add("openCategory", (category) => {
//   let catDesk = "[data-cy='standing_desk']";
//   let catChair = "[data-cy='office_chair']";
//   let catJunior = "[data-cy='autonomous_junior']";
//   let catAssesory = "[data-cy='accessory']";
//   switch (category) {
//     case "office-chair":
//       cy.get(catChair).click();
//       break;
//     case "standing-desk":
//       cy.get(catDesk).click();
//       break;
//     case "autonomous-junior":
//       cy.get(catJunior).click();
//       break;
//     case "accessory":
//       cy.get(catAssesory).click();
//       break;
//   }
// });

// Cypress.Commands.add("lazyLoadPage", () => {
//   cy.scrollTo("bottom", { duration: 2000 });
//   cy.scrollTo("top");
// });

// Cypress.Commands.add("verifyTextVisible", (message) => {
//   cy.lazyLoadPage();
//   cy.contains(message).should("be.visible");
// });

// Cypress.Commands.add("autoDetectcountry", (detect = false) => {
//   let selector;
//   if (!detect) {
//     selector = "[class^='HeaderCountry_detectInner_continueBtn']";
//   } else {
//     selector = "[class^='HeaderCountry_detectInner_changeBtn']";
//   }
//   cy.get(selector).click();
// });

// Cypress.Commands.add("closePopup", () => {
//   cy.get(".close").click();
// });

// Cypress.Commands.add("numberRange", (start, end) => {
//   if (start > end) {
//     return;
//   }
//   return new Array(end - start + 1).fill().map((d, i) => i + start);
// });

// Cypress.Commands.add("getOtp", (UserTypeValue) => {
//   cy.fixture("userAccount").then((user) => {
//     const user_data = user.filter((item) => item.UserType === UserTypeValue);
//     cy.task("queryDb", `select login_code from customer where email = '${user_data[0].UserName}'`).as("Otp");
//   });
//   cy.get("@Otp").then(($opt) => {
//     const opt = $opt[0].login_code;
//     return opt;
//   });
// });
