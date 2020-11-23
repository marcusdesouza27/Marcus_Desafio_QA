/// <reference types="cypress" />



describe('API validation', () => {
    
    beforeEach(() => {
        // cy.visit('https://www.smartmei.com.br/')
    })

    it('Create an user', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public-api/users',
            headers: {authorization: 'df56896ef58ec4b7bf0ff4d4499e9e0cd1bf57eab6a4ea26b9c4a96f293a954c'},
            body: {
                "name": "User Test",
                "email": "test@test.com",
                "gender": "Male",
                "status": "Active"
            }
        }).then(res => console.log(res))
    })

    it('Update an user', () => {
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public-api/users/1345',
            headers: {authorization: 'df56896ef58ec4b7bf0ff4d4499e9e0cd1bf57eab6a4ea26b9c4a96f293a954c'},
            body: {
                "name": "Update Name"
            }
        }).then(res => console.log(res))
    })

    it('Search an user', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users/1345',
            headers: {authorization: 'df56896ef58ec4b7bf0ff4d4499e9e0cd1bf57eab6a4ea26b9c4a96f293a954c'},
         
        }).then(res => console.log(res))
    })

    it('Delete an user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public-api/users/1486',
            headers: {authorization: 'df56896ef58ec4b7bf0ff4d4499e9e0cd1bf57eab6a4ea26b9c4a96f293a954c'},
        }).then(res => console.log(res))
    })
})