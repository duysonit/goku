/// <reference types="cypress" />
import { onlyOn, skipOn } from '@cypress/skip-test'

import 'cypress-xpath'

describe('Skip test on firefox and running only on macOS', () => {
  onlyOn ('mac', () => {
    skipOn ('firefox', () => {

      it('check website shopgoku.com', () => {

        cy.visit('https://shopgoku.com')
        cy.contains('TRANG CHỦ').should('exist')

        const getElementPhone = cy.get('.list-unstyled :nth-child(2) span')

        getElementPhone.invoke('text').then((sdt) => {
            // sdt.substr(1)
            cy.log(sdt)

        })
        
      })
    })
  })
})
