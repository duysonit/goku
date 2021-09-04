import 'cypress-file-upload'

describe('Check texture management function', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
            let url = Cypress.env('dev')
            cy.visit(url)
  
    })


    context('when user logged into the system', () => {

        beforeEach(()=>{

            cy.fixture('stylefit').then((account) => {

                cy.get('#email').type(account.profile.email)
                cy.wait(1000)
                cy.get('#password').type(account.profile.password)
                cy.get('.s-btn').click();
                
            })
        
        })

        it('user can create new texture category', () =>{

            var nameCategory = new Date().getTime()+ '_auto'
            // Click on menu Asset management
            // Click on menu Texture
            // Assert the url is correct
            // Click add new texture category
            cy.contains('Asset Management').click()
            cy.contains('Texture').click()
            cy.url().should('include', '/asset/texture')
            cy.wait(1000)
            cy.get('.left-side > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra > div > .anticon > svg')
            .click()
            // cy.get('.ant-card-extra > div > .anticon > svg').click()
            // Fill in the form
            cy.wait(1000)
            cy.get('#categoryForm_name').type(`${nameCategory}`)
            cy.get('#categoryForm_description').type('This is a description')
            // cy.get('.ant-select-selection-selected-value').click()
            // cy.get(':nth-child(3) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click()

            cy.get('.ant-btn-primary').click()
            cy.wait(1000)

        })

        it('user can edit texture category', () =>{

            // Click on menu Asset management
            // Click on menu Texture
            cy.wait(1000)
            cy.contains('Asset Management').click()
            cy.contains('Texture').click()
            // Choose category to edit
            cy.get('.ant-tree-title').click()
            cy.get('.actions-block > .anticon > svg').click()
            cy.get('.ant-dropdown-menu > :nth-child(1)').click()
            // Edit description
            cy.wait(1000)
            cy.get('#categoryForm_description').clear()
            cy.get('#categoryForm_description').type('Edit description')
            cy.get('.ant-btn-primary').click()
        })

        it('user can create new texture', () =>{
            // Click on menu Asset management
            // Click on menu Texture
            const filePath = 'images/texture.png'
            const nameTexture = new Date().toLocaleDateString()

            cy.wait(1000)
            cy.contains('Asset Management').click()
            cy.contains('Texture').click()
            // Choose category to edit
            cy.get('.ant-tree-title').click()

            cy.get('.el-button--default > :nth-child(1) > span').click()
            cy.wait(1000)
            // Fill in the form
            cy.get('#fileName').type(`${nameTexture}`)
            cy.get('#description').type('lorem ipsum')
            cy.get('button[type=button]').attachFile(filePath)
            cy.get('input[type=file]').attachFile(filePath)
            cy.get('.ant-upload > .ant-btn').click()
            cy.get('.actions-block > .mr-2').click()

        })

        it('user can edit texture', () =>{

            // Click on menu Asset management
            // Click on menu Texture
            cy.wait(1000)
            cy.contains('Asset Management').click()
            cy.contains('Texture').click()
            // Choose category to edit

            cy.get('.ant-tree-title').click()

            cy.wait(1000)
            cy.get(':nth-child(1) > .actions > .actions-group > .edit > svg > path').click({force: true})
            cy.wait(1000)
            // Edit name file
            cy.get('#fileName').clear()
            cy.get('#fileName').type('Goku')
            cy.get('.actions-block > .mr-2').click()

        })   

    })

})