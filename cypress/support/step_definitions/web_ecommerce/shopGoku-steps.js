import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ShopGoku from "../../pageObjects/external/shopGoku";

const shopGoku = new ShopGoku();

Then ("I see the Title page shopgoku {string}", () => {
  shopGoku.verifyTitleShopgoku();
})