// Here lies test for registration render page
describe('Register New User', () => {
  it('Display Register Form', () => {
    // Set up data variables
    const testPrompt = 'Cook Dinner'
    cy.visit('http://localhost:3000/')

    cy.get('[data-testid="todoForm"]').within(() => {
      cy.get('[data-testid="todoInput"]').type(testPrompt) // Only yield inputs within form
      cy.get('[data-testid="submitBtn"]').click()
    })
    cy.get('[data-testid="todoSection"]').contains(testPrompt)
  })
})
