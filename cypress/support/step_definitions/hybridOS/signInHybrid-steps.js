import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SignInHybrid from "../../pageObjects/external/signInHybrid";

const signInHybrid = new SignInHybrid();

When ("I click on the button Sign in", () => {
    signInHybrid.clickOnSignInBtn();
    cy.wait(2000);

});

Then ("I will see the page {string}", () => {
    signInHybrid.verifySignInPage();
});