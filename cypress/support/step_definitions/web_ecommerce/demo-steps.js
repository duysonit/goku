import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pageObjects/external/homePage";

const homePage = new HomePage();

Given("I navigate to sign in page", () => {
  homePage.navigateToSignInPage();
});

When("I fill email {string}", (email) => {
  homePage.inputInvalidEmail(email);
});

When("I input random email", () => {
  homePage.inputRandomEmail();
});

And("I fill otp {string}", (otp) => {
  homePage.inputOtp(otp);
});

And("I click submit button", () => {
  homePage.clickSubmit();
});

Then("I see the message {string}", (message) => {
  homePage.verifyResponseMessage(message);
});

Then("I see the error message {string}", (message) => {
  homePage.verifySiginErrorMessage(message);
});
// ============== Check link at footer ===================
When("I find {string} at footer and click {string}", (part, text) => {
  homePage.clickFooterLink(part, text);
});

Then("I see {string} on new page", (message) => {
  cy.verifyTextVisible(message);
});

And("I don't fill to {string}", (field) => {
  homePage.inputEmptyValue(field);
});

And("I login with {string}", (userType) => {
  homePage.logIN(userType);
});
