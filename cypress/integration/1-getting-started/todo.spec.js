/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })

  it('Displays a first post', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('[data-cy=add-post-button]').click()


    cy.get('[data-cy=input-title]').type("a new title")
    cy.get('[data-cy=input-description]').type("the description of the new title")

    cy.get('[data-cy=submit-btn]').click()

    cy.wait(500)

    cy.get('[data-cy=back-home-btn]').click()

    //test
    cy.contains('a new title').should('be.visible')

  })

})
