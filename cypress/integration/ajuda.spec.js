/// <reference types="cypress" />

describe('Menu Ajuda', () => {
    
    it('Clicar em Central de Ajuda', () => {
        cy.visit('https://www.smartmei.com.br/')

        cy.get('#menu-item-2647 > a').click()


        cy.get('.title-bar__title').should('contain.text', 'Bem-vindo(a) à central de ajuda da SmartMEI!')
        cy.get('.title-bar__subtitle').should('contain.text', 'Como podemos te ajudar?')

        cy.get('.entry-content > .col-lg-offset-2').should('contain.text', 'Artigos')
        cy.get('.entry-content > .col-lg-offset-2 > .btn').should('have.text', 'Aprender')

        cy.get('.entry-content > :nth-child(3)').should('contain.text', 'Veja as respostas mais frequentes para dicas adicionais.Ver mais')
        cy.get(':nth-child(3) > .btn').should('have.text', 'Ver mais')

        cy.get('.row > .col-lg-offset-2 > .btn')
            .should('have.text', 'Ver todos as perguntas')
            .click()

        cy.get('.title-bar__title').should('have.text', 'Bem-vindo ao centro de ajuda da SmartMEI')
    })

}) 