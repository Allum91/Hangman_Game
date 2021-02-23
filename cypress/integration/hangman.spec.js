// 1. Test clicking start button begins the game.
it ("should click on the start button to start the game", () => {
  cy.visit("http://127.0.0.1:5500")
  cy.get("#button").click();
})

// 2. Test 10 random letters, if a letter is in the word, it appears in the word, if not a part of the drawing is shown
it ("should click on 10 letters, if letter is in word, show, if not, show part of hangman", () => {
  cy.visit("http://127.0.0.1:5500/")
  cy.get("#button").click();
  cy.get("#A").click();
  cy.get("#Z").click();
  cy.get("#J").click();
  cy.get("#I").click();
  cy.get("#N").click();
  cy.get("#D").click();
  cy.get("#R").click();
  cy.get("#S").click();
  cy.get("#P").click();
  cy.get("#T").click();
  
  cy.get("#wordSpaces").should("contain", "A");
  cy.get("#wordSpaces").should("contain", "Z");
  cy.get("#wordSpaces").should("contain", "J");
  cy.get("#wordSpaces").should("contain", "I");
  cy.get("#wordSpaces").should("contain", "N");
  cy.get("#wordSpaces").should("contain", "D");
  cy.get("#wordSpaces").should("contain", "R");
  cy.get("#wordSpaces").should("contain", "S");
  cy.get("#wordSpaces").should("contain", "P");
  cy.get("#wordSpaces").should("contain", "T");
})