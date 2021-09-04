export default class HomePage {

    // btnSignIn = "#publicHeaderButtons > .hd-button--medium";
    // signInPage = ".hd-header-3";
  
    verifyTitle() {
        cy.title().should('eq', 'Simple workspace booking for hotdesking in the hybrid workplace.');
    }

    verifyButtonSignIn(){
        cy.get(this.btnSignIn).should("be.visible");
    }

    // Click on Sign in button
    // clickOnSignInBtn(){
        // cy.get(this.btnSignIn).click();
        // cy.wait(2000)
    // }
    // verifySignInPage(){
        // cy.get(this.signInPage).should("be.visible");
    // }


  }