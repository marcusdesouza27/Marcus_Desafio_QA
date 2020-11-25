/// <reference types="cypress" />



describe('API validation', () => {
    
    beforeEach(() => {
        // cy.visit('https://www.smartmei.com.br/')
    })

    it('Create an user', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public-api/users',
            // headers: {authorization: '2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba'},
            
            headers: {'Authorization': 'Bearer df56896ef58ec4b7bf0ff4d4499e9e0cd1bf57eab6a4ea26b9c4a96f293a954c'},
            body: {
                "name": "User Test",
                "email": "tes14t@test.com",
                "gender": "Male",
                "status": "Active"
            }
        }).its('body.code').should('equal', 201)    
    })

    it.only('Update an user', () => {
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public-api/users/1345',
            headers: {'Authorization': 'Bearer df56896ef58ec4b7bf0ff4d4499e9e0cd1bf57eab6a4ea26b9c4a96f293a954c'},
            body: {
                "name": "Update Name"
            }
        }).its('body.code').should('equal', 200)    
    })

    it.only('Search an user', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users/1345',
            headers: {'Authorization': 'Bearer df56896ef58ec4b7bf0ff4d4499e9e0cd1bf57eab6a4ea26b9c4a96f293a954c'},
        }).its('body.code').should('equal', 200)
                        
    })

    it.only('Delete an user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public-api/users/1560',
            headers: {'Authorization': 'Bearer df56896ef58ec4b7bf0ff4d4499e9e0cd1bf57eab6a4ea26b9c4a96f293a954c'},
        }).its('body.code').should('equal', 204)
    })
})