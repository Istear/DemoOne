/// <reference types="Cypress" />
describe ('Basic first tests',()=>{
    it('Navigate to the website and locate the search box',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword')
    })
    it('Search Cauliflower in the searchbox and verify the search result',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('Cauliflower');
        cy.wait(2000);
        cy.get('img[alt="Cauliflower - 1 Kg"]').should("be.visible");
    })
})