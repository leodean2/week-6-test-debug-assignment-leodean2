describe('User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  
  it('should register a new user', () => {
    cy.get('[data-testid="register-link"]').click();
    cy.get('[data-testid="name-input"]').type('Test User');
    cy.get('[data-testid="email-input"]').type('test@example.com');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="register-button"]').click();
    
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, Test User').should('be.visible');
  });
  
  it('should show validation errors', () => {
    cy.get('[data-testid="register-link"]').click();
    cy.get('[data-testid="register-button"]').click();
    
    cy.contains('Name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });
});