//// <reference types="cypress"/>


describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
        cy.wait(5000)
      })
    it('2.1 Go Through Token Submenu List',()=>{   
        cy.visit('/home/token/dashboard')
        cy.contains('Summary of Tokens').should('be.visible')
        cy.visit('/home/token/detail')
        cy.contains('Profile Summary').should('be.visible')
        cy.contains('All wallets').click()
        cy.contains('Wallet').should('be.visible')
        cy.contains('Ownership').click()
        cy.get('.captable-token--banner > .ant-btn').click()
        cy.contains('Curve DAO').click()
        cy.contains('Investor').click()
        cy.contains('mike').click()
        cy.contains('Grants').click()
        cy.contains('Grant Name').should('be.exist')
        cy.contains('Assign token grants').should('be.exist')
        cy.contains('Warrants').click()
        cy.contains('Security').should('be.exist')
        cy.contains('Transactions').click()
        cy.contains('Curve DAO Token').should('be.exist')
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})