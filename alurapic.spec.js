/// <refence type = "cypress"/>

describe('Usabilidade de tela inicial', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })
    //Novos casos de teste
    
    it('Verificar mensagem na tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('Verificar botão habilitado na tela inicial', () => {
        cy.get('input[formcontrolname= "userName"]').type('jaqueline');
        cy.get('input[formcontrolname= "password"]').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it('verifica nome da aplicação na tela inicial', () => {
        cy.contains('a', 'ALURAPIC').should('be.visible');
    })

    it('verificar menu clicável  na tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })
})