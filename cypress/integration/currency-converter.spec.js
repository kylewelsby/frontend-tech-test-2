/// <reference types="cypress" />

context("Currency Converter", () => {
  beforeEach(() => {
    cy.server();
    cy.route(
      "https://api.exchangeratesapi.io/latest?base=INR",
      "fixture:INR.json"
    ).as("INR");
    cy.route(
      "https://api.exchangeratesapi.io/latest?base=GBP",
      "fixture:GBP.json"
    ).as("GBP");
    cy.route(
      "https://api.exchangeratesapi.io/latest?base=PLN",
      "fixture:PLN.json"
    ).as("PLN");
    cy.visit("/");
    cy.wait("@INR");
  });
  it("returns default INR > PLN conversion", () => {
    cy.get(".currency-calculation").should("contain.text", "4.97 PLN");
    cy.get("#main").should("contain.text", "PLN0.049734");
    cy.get("#main").within(() => {
      cy.contains("PLN").should("have.class", "text-pink-500");
    });
  });

  it("When the base currency is changed, the application should fetch new conversion rates", () => {
    cy.get("#baseCurrency").select("GBP");
    cy.wait("@GBP");
    cy.get(".currency-calculation").should("contain.text", "487.77 PLN");
    cy.get("#main").should("contain.text", "PLN4.877674");
  });

  it("When the 'switch' button is pressed, the values of the base and target are swapped", () => {
    cy.get("#baseCurrency").should("have.value", "INR");
    cy.get("#targetCurrency").should("have.value", "PLN");
    cy.get("#controls button").click();
    cy.wait("@PLN");
    cy.get("#baseCurrency").should("have.value", "PLN");
    cy.get("#targetCurrency").should("have.value", "INR");
    cy.get(".currency-calculation").should("contain.text", "₹2,010.68 INR");
    cy.get("#main").should("contain.text", "PLN1.00000");
    cy.get("#main").should("contain.text", "INR20.106849");
  });

  it("When an amount is entered into the input, a converted amount is displayed", () => {
    cy.get("#amount").type('{backspace}{backspace}{backspace}123')
    cy.get(".currency-calculation").should("contain.text", "6.12 PLN");
  })
});
