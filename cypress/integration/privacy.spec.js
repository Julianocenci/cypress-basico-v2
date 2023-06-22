/// <reference types="Cypress" />
describe('Teste independente da pagina de politica', function() {
    beforeEach(function() {
        cy.visit('./src/privacy.html')
    }) 
     it('verifica o título da aplicação', function() {
      cy.contains('Talking About Testing').should('be.visible')
    
      })   
    })