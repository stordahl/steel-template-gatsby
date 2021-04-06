/// <reference types="Cypress" />

it("Check Accessibility", () => {
  cy.fixture("../fixtures/endpoints").then(endpoints => {
    endpoints.forEach(endpoint => {
      cy.visit(endpoint).then(() => {
        cy.wait(500);
        cy.injectAxe();
        cy.checkA11y();
      });
    });
  });
});