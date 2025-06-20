/// <reference types="cypress" />

describe('Rickroll Page Test', () => {
  beforeEach(() => {
    cy.visit('https://caim132.github.io/GetRickRolled/');
  });

  it('Deve ter um link visível para o vídeo do Rick Astley', () => {
    cy.get('a[href*="youtube.com/watch"]')
      .should('be.visible');
  });

  it('O link deve apontar para o vídeo do Rick Astley', () => {
    cy.get('a[href*="youtube.com/watch"]')
      .should('have.attr', 'href')
      .and('include', 'dQw4w9WgXcQ');
  });
});
