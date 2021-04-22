
it('clicking "start game" begins the game', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('#button').click();
  })

it('should click "reset" to reset the game', () => {
  cy.visit('http://127.0.0.1:5500/');
  cy.get('#button').click();
  cy.get('#restartButton').click();
})

it('should start the game and click the letter A', () => {
  cy.visit('http://127.0.0.1:5500/');
  cy.get('#button').click();
  cy.get('#A').click();
  })