import EleHomePage from "../../utils/eleHomePage";
const eleHomePage = new EleHomePage();

export default class HomePage {

  verifyTitle(title) {

    cy.intercept('POST', '**/cdn-cgi/rum?').as('cloudclare')
    cy.wait("@cloudclare").should(({ request, response }) => {
        expect(request.body).to.have.property('siteToken');
        expect(response.headers).to.have.property('content-type');
        expect(response.statusCode).to.eq(200);

    });
    cy.wait(1000);

    cy.title().should('eq', title);
  }

  clickFooterLink(part, text) {
    cy.lazyLoadPage();
    cy.wait(1000);
    cy.get(eleHomePage.footerTitle)
      .contains(part)
      .siblings()
      .contains(text)
      .click();
    cy.wait(1000);
  }

  verifyTextVisible(message) {
    cy.contains(message).should("be.visible");
    // check responsive all devices
    cy.checkResponsiveAllDevices();

  }

}