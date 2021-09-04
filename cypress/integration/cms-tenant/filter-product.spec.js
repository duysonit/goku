describe('Check filter function', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      let url = Cypress.env('dev')
      cy.visit(url)

    })


    context('when user logged into the system', () => {

        beforeEach(()=>{

            cy.fixture('stylefit').then((account) => {

                cy.get('#email').type(account.profile.email)
                cy.wait(1000)
                cy.get('#password').type(account.profile.password)
                cy.get('.s-btn').click();
                
            })

        
        })

        it('user can find an product by id', () =>{

            cy.contains('Orders Management').click()
            cy.contains('Product Request').click()

            cy.fixture('stylefit').then((product) => {
                cy.get('.el-form-item__content > .el-input > .el-input__inner').type(product.productId)
                .type('{enter}')

            })
            cy.get('.s-block')
            cy.wait(2000)
            .contains(`${productId}`).should('exist')

        })


        it('user can sort by product name', () =>{

            cy.wait(1000)
            cy.contains('Orders Management').click()
            cy.contains('Product Request').click()
            cy.get('.elcus-select-ico > .el-select > .el-input > .el-input__inner').click()
            cy.get('.elcus-option > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1) > span')
            .click()

        })

        it('user can clear all filter', () =>{
            
            cy.wait(1000)
            cy.contains('Orders Management').click()
            cy.contains('Product Request').click()
            cy.log('Filter product status by Recieved')
            cy.get('.s-btn-filter > .icoS').click()
            cy.get(':nth-child(2) > .el-checkbox > .el-checkbox__label').click()
            cy.get('.filter-actions > .s-btn').click()
            cy.wait(1000)
            cy.log('Clear all filter')
            cy.get('.s-btn-filter > .icoS').click()
            cy.get('.filter-clear-all > strong').click()

        })

    })

})