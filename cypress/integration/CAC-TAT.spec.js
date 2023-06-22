/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    cy.visit('./src/index.html')
 })
    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html')

        cy.title ().should('be.equal','Central de Atendimento ao Cliente TAT')
 })
    it('Preenche os campos obrigatórios e envia o formulario',function() {
        const longText = 'aaaaaaaaaaaaaa'
        cy.get('#firstName').type('Juliano')
        cy.get('#lastName').type('cenci')
        cy.get('#email').type('julianocenci123@gmail.com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })  
    
    it('Valida e-mail', function() {
        cy.get('#firstName').type('Juliano')
        cy.get('#lastName').type('cenci')
        cy.get('#email').type('julianocenci123@gmail,com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
      }) 

      it('Valida número de telefone', function() {
        cy.get('#firstName').type('Juliano')
        cy.get('#lastName').type('cenci')
        cy.get('#email').type('julianocenci123@gmail.com')
        cy.get('#open-text-area').type('teste')
        cy.get('#phone').type('abc').should('have.value', '')
        cy.contains('button', 'Enviar').click()
       
      })  

      it('Obriga preenchimento do campo quando não preenchido', function() {
        cy.get('#firstName').type('Juliano')
        cy.get('#lastName').type('cenci')
        cy.get('#email').type('julianocenci123@gmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
      })

      it('Mensagem de erro ao submeter sem preencher campos obrigatórios', function() {
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')

      })

      it('validar funções com comandos personalizados', function() {
        cy.fillmandatoryfieldsandsubmit()

      })
      
      it('seleciona um produto (youtube) por seu texto', function() {
        cy.get('#product').select('YouTube').should('have.value','youtube')

      })

      it('seleciona um produto (mentoria) pelo seu valor', function() {
        cy.get('#product').select('Mentoria').should('have.value','mentoria')

      })

      it('seleciona um produto (blog) pelo seu indice', function() {
        cy.get('#product').select(1).should('have.value','blog')

      })

      it('Marca tipo de atendimento, radio botton', function() {
      cy.get('input[type="radio"][value="feedback"]').check()
      .should('be.checked')
      
      })
      it('Marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each (function($radio) {
          cy.wrap($radio).check()
          cy.wrap($radio).should('be.checked')

        })
   })
        it('Marca cada tipo de atendimento', function() {
          cy.get('input[type="checkbox"]')
          .check()
          .last()
          .uncheck()
          .should('not.be.checked')
        
  })
           it('Selecionar arquivo ou anexo', function() {
          cy.get('input[type="file"]')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json')
          .should(function($input) {
          
           expect($input[0].files[0].name).to.equal('example.json')
          })
      }) 

      it('Selecionar arquivo ou anexo com drag-drop', function() {
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json', { action : 'drag-drop'})
        .should(function($input) {
        
         expect($input[0].files[0].name).to.equal('example.json')
         console.log($input)
        })
      })   
      it('Selecionar arquivo ou anexo com alias', function() {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('@sampleFile')
         .should(function($input) {
          expect($input[0].files[0].name).to.equal('example.json')
        
        })
      }) 
      it('Abrir aba sem clicar em outro link', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
        
        
      }) 
      it('Abrir aba sem clicar em outro link', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
        .invoke ('removeAttr','target').click()
        cy.contains('Talking About Testing').should('be.visible')


    })

    it('Abrir aba de pagina independente', function() {
      cy.get('#privacy a').should('have.attr', 'target', '_blank')
      .invoke ('removeAttr','target').click()
      cy.contains('Talking About Testing').should('be.visible')

    })   
  })    

