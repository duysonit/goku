describe('test api', () => {

    const host = Cypress.env('production')

    it('test GET', () => {

        cy.request({

            method: 'GET',
            // url: host+'/get',
            url: '/get'

        }).then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body).have.property('url', 'https://httpbin.org/get')
            // expect(response.body).have.property('origin', '103.199.68.83')
            debugger
            const saveOrigin = response.body.origin
            cy.log(saveOrigin)

            // return saveOrigin

        })
    })

    it('test POST', () => {


        let user = {
            "name": "goku",
            "age" : 28,
            "isHandsome": true
            // "saveOrigin": saveOrigin
        }

        cy.request({
            method: 'POST',
            // url: host+'/post',
            url: '/post',
            body: user,
            headers: {
                "content-type": "application/json"
            }
            
        }).then((response) => {

            expect(response.status).to.equal(200)

            expect(response.body).have.property('json')
            expect(response.body.json).deep.equal({ 

                "age": 28,
                "isHandsome": true,
                "name": "goku"
            })

            expect(response.body.json.name).equal(user.name)
            expect(response.body.json.age).equal(user.age)
            expect(response.body.json.isHandsome).equal(user.isHandsome)

            let saveName = response.body.json.name
            cy.log(saveName)

        })
    })


    it('test storing and reuse variable',() => {

        let user = {
            "name": "goku",
            "age" : 28,
            "isHandsome": true
        }

        cy.request('POST','/post',user).then((response) => {
            expect(response.status).to.eq(200)
            let a = response.body.json.name
            cy.log(a)

        }).then( a => {
            cy.request({
                method: 'POST',
                url: '/post',
                body: {
                    "name": a,
                    "age" : 30,
                    "isHandsome": false
        
                }
        })
    })

        // cy.request({
            // method: 'POST',
            // url: host+'/post',
            // url: '/post',
            // body: user,
            // headers: {
                // "content-type": "application/json"
            // }
            
        // .then((response) => {

                // expect(response.status).to.eq(200)
                // let a = response.body.json.name
                // cy.log(a)

            // })
            // .then(a => {
                // cy.request({
                    // method: 'POST',
                    // url: '/post',
                    // body: {
                        // "name": a,
                        // "age" : 30,
                        // "isHandsome": false
            // 
                    // },
                    // headers: {
                        // "content-type": "application/json"
                    // }
            // })
        // })
        

    })



})