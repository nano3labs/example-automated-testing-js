describe('submit email form', () => {
  it('should let me fill up the form', () => {
    cy.visit('http://localhost:3000')

    cy.get('[name="full-name"]').type('Michael Yagudaev')
    cy.get('[name="email"]').type('michael@nano3labs.com')
    cy.get('button').click()

    expect(cy.contains('Successfully submitted')).toBeTruthy
  })
})
