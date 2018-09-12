describe('login', () => {
  beforeEach(() => {
    visitLoginPage()
  })

  it('A User logs in and sees a welcome message', () => {
    loginWith('michael@nano3labs.com', 'passsword')

    expect(cy.contains('Successfully submitted')).toBeTruthy
  })

  it('A User logs off and sees a goodbye message', () => {

  })
})

const visitLoginPage = () => {
  cy.visit('http://localhost:3000')
}

const loginWith = (email, password) => {
  cy.get('[name="email"]').type(email)
  cy.get('[name="password"]').type(password)
  cy.get('button').click()
}
