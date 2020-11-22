/// <reference types="cypress" />



describe('Página Como Funciona', () => {

    beforeEach(() => {
        cy.visit('https://www.smartmei.com.br/')
    })

    it('Clicar em Como Funciona', () => {
        cy.get('#menu-item-87 > a').click()


        cy.get('#burocracia > .content-container > :nth-child(1) > .col-sm-10 > h2').should('contain.text', 'Fique livre da burocracia')

        cy.get('#planos-e-tarifas > .content-container > :nth-child(1) > .col-sm-10 > :nth-child(2)')
        .should('contain.text', 'Compare a SmartMEI com o custo de um contador e de uma conta Pessoa Jurídica nos principais bancos')

        cy.get('#controle-financeiro > .content-container > :nth-child(1) > .col-sm-10 > h2')
            .should('contain.text', 'Controle Financeiro mais simples')

    })
})