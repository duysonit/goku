import 'cypress-plugin-tab'
import 'cypress-xpath'


describe('Check filter amazon and add to cart', () => {
    //   Cypress starts out with a blank slate for each test
    //   so we must tell it to visit our website with the `cy.visit()` command.
    //   Since we want to visit the same URL at the start of all our tests,
    //   we include it in our beforeEach function so that it runs before each test
        context('user logged into the system', () => {
            beforeEach(() => {

                let url = Cypress.env('stagging')

                cy.visit(url)
                cy.get('#nav-link-accountList-nav-line-1').click()
                cy.wait(1000)

                // cy.fixture('amazon').then((profile) => {
                cy.fixture('amazon').then((account) => {

                    cy.get('#ap_email').type(account.profile.email)
                    cy.wait(1000)
                    cy.get('.a-button-inner > #continue').click()
                    cy.get('#ap_password').type(account.profile.password)
    
                })

                cy.get('#signInSubmit').click();
                cy.wait(1000)
    
            })

            it('user can able to search item and add to cart', () => {

                cy.fixture('amazon').then((search) => {

                    cy.get('#twotabsearchtextbox').type(search.item)
                    cy.get('#nav-search-submit-button').click()
                    cy.wait(1000)    

                })
                
                cy.contains('results for "sd card"').should('exist')
                // filter 64GB
                cy.get('[aria-posinset="2"] > .a-section > .a-size-base').click()
                cy.wait(1000)
                // sort price by high to low
                cy.get('#a-autoid-0-announce').click()
                cy.get('#s-result-sort-select_2').click()
                cy.wait(1000)
                // click 1st item on listing
                cy.log('click on the 1st item on listing')
                cy.get('[data-asin="B00CIZU8UC"] > :nth-child(1) > .celwidget > .s-expand-height > .a-spacing-medium >'
                +':nth-child(2) > :nth-child(1) > .sg-col-inner > .a-spacing-none > .rush-component > .a-link-normal > .a-section >'
                +'.s-image').click()
                cy.wait(1000)
                // add to cart
                cy.log('click on add to cart')
                cy.get('#add-to-cart-button').click()
                cy.wait(1000)
                cy.xpath("//*[@aria-labelledby='attachSiNoCoverage-announce']").click()
                // view the cart 
                cy.log('view cart')
                cy.get('#hlb-view-cart-announce').click()
                // increase quantity to 3
                cy.get('.a-dropdown-prompt').click()
                cy.wait(1000)
                cy.get('#dropdown1_3').click()
                cy.wait(1000)

                // assert the subtotal price
                cy.log('###### Assert the subtotal')
                // var pricePerItem = cy.get('p.a-spacing-mini > .a-size-medium').invoke('text')
                cy.get('p.a-spacing-mini > .a-size-medium').invoke('text').then((tempPricePerItem) => {

                    let pricePerItem = tempPricePerItem.substr(1)
                    // pricePerItem.toString.subString(1)
                    cy.log('Price per item: ' +pricePerItem)
                    // get actual quantity of item
                    cy.get('.a-dropdown-prompt').invoke('text').then((quantityItem) => {

                        cy.log('Total quantity of item: '+quantityItem)
                        //Round value to 2 value decimal points
                        let expectedPrice = (pricePerItem*quantityItem).toFixed(2)
                        cy.log('Expected price: ' +expectedPrice)
                        
                        // get subtotal price value
                        cy.get('#sc-subtotal-amount-activecart > .a-size-medium').invoke('text').then((priceSubTotalAmount) => {
    
                            let actualPriceSubTotalAmount = priceSubTotalAmount.substr(1).replace(',','')
                            cy.log('Actual price subtotal amount: '+actualPriceSubTotalAmount)
                            // assert price subtotal
                            expect(expectedPrice).to.eq(actualPriceSubTotalAmount)
        
                        })

                    })    


                })


            })

        })    

})