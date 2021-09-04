describe('Read write test suite', () => {

    it('write file amazon.json', () => {
        cy.writeFile('cypress/fixtures/test.json', {
            email: 'duysonit@gmail.com',
            password: '123456',
            age: 28
        })
    })

    it('read file', () => {

        cy.readFile('cypress/fixtures/test.json').then((profile) => {
            expect(profile.email).to.equal('duysonit@gmail.com')
            expect(profile.password).to.equal('123456')
        })
    })
})