export default class SignInHybrid {

    btnSignIn = "#publicHeaderButtons > .hd-button--medium";
    signInPage = ".hd-header-3";
  
    clickOnSignInBtn(){
        cy.get(this.btnSignIn).click();
        cy.wait(2000);
    }

    verifySignInPage(){
        cy.get(this.signInPage).should("be.visible");
    }
  }