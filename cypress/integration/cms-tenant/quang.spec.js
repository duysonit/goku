/// <reference types="cypress" />

import 'cypress-file-upload'

describe('Check create new order function', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        let url = Cypress.env('dev1')
        cy.visit(url)


    })


    it('user can upload media file', () => {

        cy.fixture('stylefit').then((account) => {

            cy.get('#username').type(account.profile.username)
            cy.wait(1000)
            cy.get("#login-submit > .css-19r5em7").click();
            cy.wait(1000)
            cy.get('#password').type(account.profile.psw)
            cy.wait(1000)
            cy.get('#login-submit > .css-19r5em7').click();
            cy.wait(3000)

            // cy.get('footer').scrollIntoView({ duration: 2000 })



            // cy.viewport(1366clear,1000)
            // cy.scrollTo("bottom")
            //   cy.scrollTo("bottom", { duration: 2000 });

            cy.wait(2000)
            const filePath = 'images/123.zip'


            // cy.scrollTo('bottom');

            cy.get('input[class="upload-attachments"]').attachFile(filePath)
            cy.get('.aui-button importer-upload-attachments').click()
            // cy.get('.el-button--default > :nth-child(1) > span').click()



        })
    })

})