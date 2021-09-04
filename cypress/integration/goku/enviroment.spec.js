
describe ('Verify Environment Config', () => {

        it('Verify Environment', () => {

            // let url = Cypress.config().baseUrl;
            let url = Cypress.env('stagging')

    
            cy.visit(url) //use url variable

        })
    
    })