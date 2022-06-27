describe('Negative test case spec', () => {

  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it('Registration with invalid Email-id', () => {
    cy.get('a[class="login"]').click()
    cy.url().should('include', 'my-account')
    cy.get('input[name="email_create"]').type('invalid email')
    cy.get('button[id="SubmitCreate"]').click()
    cy.contains('Invalid email address.')
  })
  it('Registration with empty Email-id', () => {
    cy.get('a[class="login"]').click()
    cy.url().should('include', 'my-account')
    cy.get('button[id="SubmitCreate"]').click()
    cy.contains('Invalid email address.')
  });
  it('Sign in with correct email and empty password', () => {
    cy.get('a[class="login"]').click()
    cy.url().should('include', 'my-account')
    cy.get('input[id="email"]').type('validemail@mail.com')
    cy.get('input[id="passwd"]')
    cy.get('button[id="SubmitLogin"]').click()
    cy.contains('Password is required.')
  });
  it('Sign in with incorrect email and incorrect password.', () => {
    cy.get('a[class="login"]').click()
    cy.url().should('include', 'my-account')
    cy.get('input[id="email"]').type('incorrect@mail.com')
    cy.get('input[id="passwd"]').type('Password123**')
    cy.get('button[id="SubmitLogin"]').click()
    cy.contains('Authentication failed.')
  });
  it('Sign in with empty email and empty password.', () => {
    cy.get('a[class="login"]').click()
    cy.url().should('include', 'my-account')
    cy.get('input[id="email"]')
    cy.get('input[id="passwd"]')
    cy.get('button[id="SubmitLogin"]').click()
    cy.contains('An email address required.')
  });
})
