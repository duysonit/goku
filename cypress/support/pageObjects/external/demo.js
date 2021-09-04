export default class HomePage {
    userEmail = "#email";
    userPassword = "#password";
    submitButton = "[type='submit']";
    userIcon = "[data-cy='user_icon']";
    userSignin = "[data-cy='user_signin']";
    footerTitle = "h4[class^='Footer_title']";
    // randomEmail = this.randomString(5) + "@gmail.com";
    otp = "#code";
    errorMessage = "[class^='OtpSignIn_OtpSignIn_error']";
  
    inputInvalidEmail(email) {
      cy.get(this.userEmail).type(email);
    }
  
    inputRandomEmail() {
      cy.get(this.userEmail).type(this.randomEmail);
    }
  
    inputOtp(code) {
      cy.get(this.otp).type(code);
    }
  
    inputEmptyValue(field) {
      let r;
      if (field === "email") {
        r = this.userEmail;
      } else {
        r = this.userPassword;
      }
      cy.get(r)
        .focus()
        .blur();
    }
  
    clickSubmit() {
      cy.wait(1000);
      cy.get(this.submitButton).click();
    }
  
    verifyResponseMessage(messagge) {
      cy.contains(messagge).should("be.visible");
    }
  
    verifySiginErrorMessage(messagge) {
      cy.get(this.errorMessage)
        .contains(messagge)
        .should("be.visible");
    }
  
    navigateToSignInPage() {
      cy.get(this.userIcon).trigger("mouseover");
      cy.get(this.userSignin).click();
      cy.wait(2000);
    }
  
    clickFooterLink(part, text) {
      cy.get("[class^='SEOBlock']").scrollIntoView();
      cy.scrollTo("bottom", { duration: 2000 });
      cy.wait(1000);
      cy.get(this.footerTitle)
        .contains(part)
        .siblings("ul")
        .contains(text)
        .click();
    }
  
    logIN(userType) {
      cy.fixture("userAccount").then((user) => {
        const userData = user.filter((item) => item.UserType === userType);
        this.inputInvalidEmail(userData[0].UserName);
        this.clickSubmit();
        cy.task("queryDb", `select login_code from customer where email = '${userData[0].UserName}'`).as("Otp");
        cy.wait(3000);
        cy.get("@Otp").then(($opt) => {
          const opt = $opt[0].login_code;
          cy.log("opt", opt);
          this.inputOtp(opt);
        });
      });
      this.clickSubmit();
      // cy.closePopup();
    }
  }
  