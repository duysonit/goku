export default class HomePage {
  
    verifyTitle() {
      cy.title().should('eq', 'Simple workspace booking for hotdesking in the hybrid workplace.')
    }

  }