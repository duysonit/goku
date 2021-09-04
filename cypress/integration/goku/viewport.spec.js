/// <reference types="cypress" />
import { onlyOn, skipOn } from '@cypress/skip-test'

describe('Running only on macOS and view port on mac 15 inch', () => {
  onlyOn ('mac', () => {

      it('check website shopgoku.com', () => {
        cy.visit('https://shopgoku.com')
        cy.contains('TRANG CHỦ').should('exist')

        cy.viewport('iphone-x')
        cy.wait(1000)
        cy.viewport(1366,768) // width , height
        cy.wait(1000)
        cy.viewport('macbook-15')
        cy.wait(1000)
        cy.viewport('macbook-13')
        cy.wait(1000)
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
        cy.viewport('iphone-4', 'landscape')
        cy.wait(200)
        

        cy.title().its('length').should('eq',15)

        cy.window().should('have.property', 'top')



      })
  })
})
