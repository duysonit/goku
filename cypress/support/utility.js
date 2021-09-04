export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://www.shopgoku.com.com"; //return desired url
        else if (envi == 'stagging')
            return "https://aodaingocanh.com";
    }
}