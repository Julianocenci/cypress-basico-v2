Cypress.Commands.add ('fillmandatoryfieldsandsubmit', function() {

    cy.get('#firstName').type('Juliano')
    cy.get('#lastName').type('cenci')
    cy.get('#email').type('julianocenci123@gmail,com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
})