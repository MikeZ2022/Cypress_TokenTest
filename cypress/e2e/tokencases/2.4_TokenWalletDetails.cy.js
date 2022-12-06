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
      })
    it('2.4 Go Through Token Wallet Details',()=>{   
        cy.visit('/home/token/dashboard')
        cy.contains('Summary of Tokens').should('be.visible')
        cy.contains('Stakeholders').click()
        cy.contains('All wallets').click()
        cy.get('.ant-space > :nth-child(2) > .ant-btn')
          .click()
        cy.contains('Curve DAO')
          .click()
        cy.get('[data-row-key="146262"] > :nth-child(3) > div > a')
          .click()
        cy.get('.is-invalid > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
          .click()
          .wait(3000)
          .type('mzhuang2019@gmail.com{enter}')
        cy.get('.transaction-update-stakeholder-btn > .ant-btn-primary')
          .click()
        cy.contains('Quantity').should('be.visible')
        cy.get('[data-row-key="146262"] > .ant-table-cell-fix-right > .ant-dropdown-trigger')
          .click()
          cy.get('.ant-table-cell-fix-left-last > :nth-child(1) > :nth-child(1) > :nth-child(2) > .anticon > svg')
          .click()
        cy.get('.ant-popover-buttons > .ant-btn-primary')
          .click()
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})