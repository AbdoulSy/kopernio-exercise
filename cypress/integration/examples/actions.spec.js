/// <reference types="Cypress" />

context('Given User Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('.When typing into the post input', () => {
    cy.get('input[data-testid="kopernio-post-form-input"]')
      .type('72').should('have.value', '72')
  })

  it('.When focusing into the element', () => {
    cy.get('input[data-testid="kopernio-post-form-input"]').focus()
      .should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')
  })

  it('.When Submitting the form', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts', {
      userId: 5,
      id: 42,
      title:'commodi ullam sint et excepturi error explicabo praesentium voluptas',
      body: 'odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut'
    })
    cy.get('input[data-testid="kopernio-post-form-input"]')
      .find('[type="text"]').type('42')
    cy.get('input[data-testid="kopernio-post-form-element"]').submit()
      .next().should('contain', 'commodi ullam sint et excepturi error explicabo praesentium voluptas')
  })
})
