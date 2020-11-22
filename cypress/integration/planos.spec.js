/// <reference types="cypress" />



describe('Go to homepage', () =>{
    
    beforeEach(() => {
        cy.visit('https://www.smartmei.com.br/')
    })

    it('Guia Planos', () => {
        cy.get('#menu-item-88 > a').click()
    
        
        cy.get('#planos-e-tarifas > .content-container > :nth-child(1) > .col-sm-10 > h2').should('have.text', 'Conheça nossos planos e tarifas!')

        cy.get('#depoimentos > .content-container > :nth-child(1) > .col-sm-10 > h2').should('have.text', 'Depoimentos de pessoas felizes')
        cy.get(':nth-child(2) > .box-content > :nth-child(6)').should('have.text','Funciona e a empresa está cada vez mais empenhada em melhorar o APP. Suporte total!!!')

        cy.get('p > .btn').should('have.text', 'BAIXAR APP')

        cy.get('.col-sm-10 > .nav')
            .should('have.text', 'PlanosTarifasCompare')
            .find('a').as('.col-sm-10 > .nav > .active > a')

        cy.get(':nth-child(4) > .hidden-xs')
            .should('contain.text', 'Verificar situação de pagamento de impostos')
          
    })

    it('Guia Tarifas', () => {
        cy.get('.col-sm-10 > .nav > :nth-child(2) > a')
            .should('have.text', 'Tarifas')
            .click()

        cy.get('#planos-e-tarifas > .content-container > :nth-child(1) > .col-sm-10 > h2')
            .should('have.text', 'Conheça nossos planos e tarifas!')
        
        cy.get('.tarifas-2-3-2')
            .should('contain.text', 'R$ 15,00\n*pagando R$45,00/trimestre')
    })
    
    it('Guia Compare', () => {
        cy.get('.col-sm-10 > .nav > :nth-child(3) > a')
            .should('have.text', 'Compare')
            .click()

        var contador = cy.get('.hidden-xs > .bank-option-bb')
        
        cy.get('.btn-group > .btn')
            .click()

        cy.get('.bank_option_itau > a > .img-responsive').click()
        cy.get('.hidden-xs > .bank-option-itau')
            .should('not.be.null')
            .and('not.have.text', contador)
            

        cy.get('.no-border > .col-xs-12 > a').should('contain.text', 'VER COMPARAÇÃO COM TODOS OS BANCOS')
    })

   
})