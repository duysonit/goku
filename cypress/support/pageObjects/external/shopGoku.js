export default class Shopgoku{
  
    verifyTitleShopgoku() {
      cy.title().should('eq','Home | ShopGoKu')
    }

  }