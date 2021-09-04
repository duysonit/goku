import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pageObjects/external/homePage";

const homePage = new HomePage();

Given ("I navigate to homepage ", () => {
  homePage.verifyTitle();
});

Then ("I see the Title {string}", (message) => {
  homePage.verifyTitle();
})