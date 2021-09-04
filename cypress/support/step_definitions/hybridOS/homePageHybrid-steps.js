import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pageObjects/external/homePageHybrid";

const homePage = new HomePage();

Then ("I see the Title {string}", (message) => {
    homePage.verifyTitle(message);
});