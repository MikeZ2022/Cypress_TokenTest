////<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
        cy.wait(5000)
      })
    it('2.2 Exist Token Details check',()=>{   
        cy.visit('/home/token/dashboard')
        cy.url().should('contains','token/dashboard')
        cy.contains('Select Token').trigger('mouseover')
        cy.visit('/home/token/detail')
        cy.contains('Overview').should('be.visible')
        cy.contains('Profile Summary').should('be.visible')
        cy.contains('Transactions').should('be.visible')
        cy.contains('Back to summary').click()
        cy.url().should('contains','token/dashboard')
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})