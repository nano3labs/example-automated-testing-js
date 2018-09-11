describe('login', () => {
  it('A User logs in and sees a welcome message', () => {
    cy.visit('http://localhost:3000')

    cy.get('[name="email"]').type('michael@nano3labs.com')
    cy.get('[name="password"]').type('Michael Yagudaev')
    cy.get('button').click()

    expect(cy.contains('Successfully submitted')).toBeTruthy
  })
})
