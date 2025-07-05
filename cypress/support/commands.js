//import 'cypress-file-upload';
//const XLSX = require('xlsx')

Cypress.Commands.add('readExcelFile', (filePath) => {
    return cy.task('readExcelFile', filePath)
})

Cypress.Commands.add('writeToExcel', (filePath, data) => {
    return cy.task('writeToExcel', { filePath, data })
})

Cypress.Commands.add('visitURL', () => {
   cy.visit('https://www.saucedemo.com/')
})


Cypress.Commands.add('showErrorMessage', (message) => {
    cy.get('[data-test="error"]').should('have.text', message)
})

Cypress.Commands.add('getElementByText', (text) => {
    return cy.contains(text)
})

Cypress.Commands.add('clickElement', (selector) => {
    return cy.get(selector).should('be.visible').click()
})

Cypress.Commands.add('inputText', (selector, text) => {
    if (text != '') {
        cy.get(selector).should('be.visible').clear().type(text)
    } else {
        cy.get(selector).should('be.visible').clear()
    }
})

Cypress.Commands.add('verifyElementExists', (selector) => {
    return cy.get(selector).should('exist')
})

Cypress.Commands.add('verifyElementIsVisible', (selector) => {
    return cy.get(selector).should('be.visible')
})

Cypress.Commands.add('verifyURL', (expectedUrl) => {
    return cy.url().should('include', expectedUrl)
})
