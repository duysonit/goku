import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pageObjects/external/homePage";

const homePage = new HomePage();

Then("I see the title {string}", (title) => {
  homePage.verifyTitle(title);
})

// Verify footer
When("I find {string} at footer and click {string}", (part,text) => {
  homePage.clickFooterLink(part,text);
});

Then("I see the {string} on the page", (message) => {
  homePage.verifyTextVisible(message);
});
