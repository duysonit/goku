import { Utility } from "../../support/utility"


describe('Check inherite function', () => {

    context('when user logged into the system', () => {

        beforeEach(()=>{

            // const util = new Utility();
            // util().logInAmazon();

            let url = Cypress.config().baseUrl
            cy.visit(url)

        })

        it('user can search sd card', () =>{
            const searchItem = 'sd card'
            cy.get('#twotabsearchtextbox').type(`${searchItem}`)
            cy.get('#nav-search-submit-button').click()
            cy.wait(1000)
            
            cy.contains('results for "sd card"').should('exist')


        })


        it('user can search macbook', () =>{
            const searchItem = 'macbook'
            cy.get('#twotabsearchtextbox').type(`${searchItem}`)
            cy.get('#nav-search-submit-button').click()
            cy.wait(1000)
            
            cy.contains('results for "macbook"').should('exist')


        })

    })

})