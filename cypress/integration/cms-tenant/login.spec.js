/// <reference types="cypress" />

describe('Check login function', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      let url = Cypress.env('dev')
      cy.visit(url)

    })
  
    context('when user logged into the system', () =>{
        beforeEach(()=>{

          cy.fixture('stylefit').then((account) => {

            cy.get('#email').type(account.profile.email)
            cy.wait(1000)
            cy.get('#password').type(account.profile.password)
            cy.get('.s-btn').click();
            
        })

        })

        // Verify all menu item
        it('user can be able to view all menu items', () => {
          // Then, we use `should` to assert that there are two matched items,
        
          cy.contains('Dashboard').should('exist')
          cy.contains('Orders Management').should('exist')

          cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
          cy.contains('New Asset Order').should('exist')
          cy.contains('3D Model Orders').should('exist')
          cy.contains('Product Request').should('exist')

          cy.contains('Asset Management').should('exist')
          cy.contains('Asset Management').click()
          cy.contains('Texture').should('exist')
          cy.contains('Material').should('exist')
          cy.contains('Model3D').should('exist')

          cy.contains('Products').should('exist')
          // cy.contains('Billing').should('exist')
          // cy.contains('Billing').click()
          // cy.contains('Products & Services').should('exist')
          // cy.contains('Invoices').should('exist')
          // cy.contains('Payments').should('exist')

          cy.contains('Integrations').should('exist')
          cy.contains('Integrations').click()
          cy.contains('Shopify').should('exist')
          cy.contains('Google Analytics').should('exist')

          cy.contains('Settings').should('exist')
          cy.contains('Settings').click()
          cy.contains('Profile').should('exist')
          cy.contains('Region Management').should('exist')

          cy.contains('Logout').should('exist')
        })


    })

  })