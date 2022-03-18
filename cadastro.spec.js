
describe(' Cadastro de usuários alura pic', () => {
    beforeEach(() => {
        cy.visit(' / ')
    })

    it('verificar mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    
    })

    it('verificar  mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('jaqueline');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica  mensagens nome de usuário deve estar em minúsculo', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname= "userName"]').type('TESTE');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('verifica  mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('456');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it.only(`Registrar novo usuário,  ${usuario.userName}`, () => { //concatenação ou interpolação usa ´aspas` $ {}, () => 
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();

            cy.get('input[formcontrolname= "email"]').type(usuario.email);
            cy.get('input[formcontrolname= "fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname= "userName"]').type(usuario.userName);
            cy.get('input[formcontrolname= "password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    })

}) 