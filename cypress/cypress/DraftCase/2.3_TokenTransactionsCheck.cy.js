////<reference types="cypress"/>


describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-13')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
        cy.wait(5000)
        cy.visit('/home/token/dashboard')
        cy.contains('Summary of Tokens').should('be.visible')
      })
    it('2.3 Token Transactions Check',()=>{   
        
        cy.contains('Transactions').click()
        cy.get('.sprout-flex > .ant-dropdown-trigger').click()
        cy.contains('Curve DAO').click()
        cy.wait(5000)
        cy.get('[data-row-key="2952143"] > :nth-child(4) > :nth-child(1) > .update-button').click()
        cy.get('.coin-transaction-updatetags-content > .ant-select > .ant-select-selector').type('MikeTest')
        cy.get('.coin-transaction-updatetags-label').click()
        cy.contains('Confirm').click()
        cy.wait(5000)
        cy.contains('MikeTest').should('be.visible')
        cy.contains('Update Notes').eq('0').click()
        cy.get('textarea').clear().type('TestFromMike')
        cy.contains('Confirm').click()
        cy.wait(5000)
        cy.contains('TestFromMike').should('be.visible')
        cy.contains('Update Tags').eq('0').click()
        cy.get('.ant-select-selection-item-remove > .anticon > svg').click()
        cy.contains('Confirm').click()
        cy.wait(5000)
        cy.contains('MikeTest').should('not.exist')
        cy.contains('Update Notes').eq('0').click()
        cy.get('textarea').clear()
        cy.contains('Confirm').click()
        cy.wait(5000)
        cy.contains('TestFromMike').should('not.exist')
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})