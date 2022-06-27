describe('Positive test case spec', () => {
  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var string = '';
  for(var ii=0; ii<15; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  let email = string + '@gmail.com';


  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it ( 'Registration', function () {
    cy.get('a[class="login"]').click()
    cy.url().should('include', 'my-account')
    cy.get('input[name="email_create"]').type(email)
    cy.get('button[id="SubmitCreate"]').click()
    cy.wait(200)
    cy.url().should('include', 'controller=authentication&back=my-account#account-creation')
    cy.get('input[id="id_gender1"]').click()
    cy.get('input[id="customer_firstname"]').type('nama anda')
    cy.get('input[id="customer_lastname"]').type('nama belakang')
    cy.get('input[id="passwd"]').type('Password123*')
    cy.get('select[id="days"]').select('2').should('have.value', '2')
    cy.get('select[id="months"]').select('2').should('have.value', '2')
    cy.get('select[id="years"]').select('2016').should('have.value', '2016')
    cy.get('input[id="address1"]').type('Jalan bulak barat III')
    cy.get('input[id="city"]').type('Jakarta Timur')
    cy.get('select[id="id_state"]').select('7').should('have.value', '7')
    cy.get('input[id="postcode"]').type(82394)
    cy.get('select[id="id_country"]').select('21').should('have.value', '21')
    cy.get('input[id="phone_mobile"]').type('9023942034')
    cy.get('button[id="submitAccount"]').click()
    cy.url().should('include','controller=my-account')
  } );

  it ( 'SignIn ', function () {
    cy.get('a[class="login"]').click()
    cy.url().should('include', 'my-account')
    cy.get('input[id="email"]').type('validemail@mail.com')
    cy.get('input[id="passwd"]').type('Password123*')
    cy.get('button[id="SubmitLogin"]').click()
  } );
  it('Search', () => {
    cy.get('form[id="searchbox"]').type('Faded Short Sleeve')
    cy.get('button[name="submit_search"]').click()
    cy.contains('1 result has been found')
  });

  it('Subscription newsletter.', () => {
    cy.get('footer').scrollIntoView()
    cy.get('input[id="newsletter-input"]').type(email)
    cy.get('button[name="submitNewsletter"]').click()
    cy.contains('Newsletter : You have successfully subscribed to this newsletter.')
  });

  it('Contact us - send a message.', () => {
    cy.get('div[id="contact-link"]').click()
    cy.wait(200)
    cy.url().should('include', 'contact')
    cy.scrollTo('center')
    cy.get('select').select('2').should('have.value', '2')
    cy.get('input[id="email"]').type(email)
    cy.get('input[id="id_order"]').type('Order reference')
    cy.get('input[id="fileUpload"]').selectFile('cypress/fixtures/file1.png')
    cy.get('textarea[id="message"]').type('Semoga berhasil')
    cy.get('button[id="submitMessage"]').click()
    cy.wait(200)
    cy.contains('Your message has been successfully sent to our team.')
  });
})
