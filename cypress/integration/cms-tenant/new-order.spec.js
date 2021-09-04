/// <reference types="cypress" />

import 'cypress-file-upload'

describe('Check create new order function', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      let url = Cypress.env('dev')
      cy.visit(url)

  
    })

    context('When user logged into the system', () => {

        beforeEach(()=>{

            cy.fixture('stylefit').then((account) => {

                cy.get('#email').type(account.profile.email)
                cy.wait(1000)
                cy.get('#password').type(account.profile.password)
                cy.get('.s-btn').click();
                
            })


        })

        // const numberOfAbTests = 2
        // for(let i = 1; i <= numberOfAbTests; i++){

        it('user can be able to create new order', () => {

            const numberOfAbTests = 2
            for(let i = 1; i <= numberOfAbTests; i++){

            // const filePath = 'images/fbx.png'
            const filePath = 'images/pillow.fbx'
            const fileProduct = 'images/product_reference.png'

            var nameAsset = new Date()+ '_Automation test'
            var extraVariant = 'Extra variant'
            // Generate 6 character string composed of characters picked randomly from the set [a-zA-Z0-9].
            var masterSKU = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6).toUpperCase();
            // Variant SKU
            var variantSKU = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6).toUpperCase();

            // Check menu item Orders management does exist
            // Click on Orders management to show sub menu item
            // Click on menu New asset order
            // Click New order
            // Assert the url is correct
            
            cy.contains('Orders Management').should('exist')
            cy.contains('Orders Management').click()
            cy.contains('New Asset Order').click()
            cy.get('.grid-1 > .grid-content > .s-btn').click()
            cy.url().should('include', '/orders-management/new')
            // Fill in name asset
            // Fill in master SKU
            // choose category 
            // upload FBX file
            cy.get(':nth-child(2) > .el-col > .el-form-item > .el-form-item__content > .el-input > .el-input__inner')
            .type(`${nameAsset}`)
            cy.get(':nth-child(3) > .el-col > .el-form-item > .el-form-item__content > .el-input > .el-input__inner')
            .type(`${masterSKU}`)
            cy.get('.ant-select-selection__rendered').click()
            cy.get(':nth-child(1) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click()
            cy.get('input[type=file]').attachFile(filePath)
            cy.get('.el-upload > .s-btn').click()
            cy.get('.el-button--default > :nth-child(1) > span').click()
            cy.get(':nth-child(1) > .el-col > .el-form-item > .el-form-item__content > .el-input > .el-input__inner')
            .type(`${extraVariant}`)
            cy.get('.form-variant-wp > .el-form > :nth-child(2) > .el-col > .el-form-item > .el-form-item__content > .el-input > .el-input__inner')
            .type(`${variantSKU}`)

            cy.get('.fit-button-group > .group-btn > .el-button > span').click()
        
            cy.wait(1000)

            }

        })   
    
        
        it('user can be able to edit order', () =>{

            var addDescription = 'Lorem ipsum'
            cy.contains('Orders Management').should('exist')
            cy.contains('Orders Management').click()
            cy.contains('3D Model Orders').click()
            cy.wait(1000)
            cy.get('.el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_1_column_8 > .cell > .elcus-dropdown > .el-dropdown-link > .el-icon-more')
            .click()
            .type('{downarrow}{enter}')
            cy.wait(1000)
            cy.get(':nth-child(5) > .el-col > .el-form-item > .el-form-item__content > .el-textarea > .el-textarea__inner')
            .type(`${addDescription}`)
            cy.get('.fit-button-group > .group-btn > .elcus-button-main').click()
        })
// 
        // it('user can be able to delete order', () =>{
            // 
            // cy.contains('Orders Management').should('exist')
            // cy.contains('Orders Management').click()
            // cy.contains('3D Model Orders').click()
            // cy.wait(1000)
            // cy.get('.el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_1_column_8 > .cell > .elcus-dropdown > .el-dropdown-link > .el-icon-more')
            // .click()
            // .type('{downarrow}{downarrow}{enter}')
            // cy.get('.el-button--primary > span').click()
// 
        // })

    })
  })