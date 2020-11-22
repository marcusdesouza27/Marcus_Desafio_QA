/// <reference types="cypress" />



describe('Homepage', () => {
    
    beforeEach(() => {
        cy.visit('https://www.smartmei.com.br/')
    })

    it.only('Acessar Homepage da Smartmei', () => {

        cy.get('h1').should('contain.text', 'Ser MEI ficou fácil de verdade!')
        
        cy.get('#banner > :nth-child(1) > h4')
            .should('contain.text', 'Tudo o que você precisa para nunca mais se preocupar com governo, contadores ou bancos')
            
        cy.get('.banner-phone > .img-responsive')

        cy.get('#menu-item-87 > a')
            .should('have.text', 'COMO FUNCIONA')
        
        cy.get('#menu-item-88 > a')
            .should('have.text','PLANOS E TARIFAS')

        cy.get('#menu-item-2647 > a')
            .should('have.text', 'Central de ajuda')
    })

    it('Baixar Aplicativo', () => {
        cy.get('.banner-link > .btn')
        .should('contain.text', 'BAIXAR APP')
        .click()
    })

})