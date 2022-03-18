describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('Fazer login de usuário válido', () => {
            
        cy.login(Cypress.env('userName'), Cypress.env('password')) //Cypress.env é o arquivo   que está o local onde esconde a senha {log: false} dentro no arquivo cypress.json
        
        cy.contains('a', '(Logout)').should('be.visible');
    })

    
    it('Fazer login de usuário inválido', () => {
        
        cy.login('jaqueline', '1234');
        
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })

        // Esse funciona também
    //it.only('Fazer login de usuário válido', () => {
        //cy.get('input[formcontrolname="userName"]').type('flavio');
        //cy.get('input[formcontrolname="password"]').type('123');
        //cy.get('button[type="submit"]').click();
        //cy.contains('a', '(Logout)').should('be.visible');
    //})

    
   // it.only('Fazer login de usuário inválido', () => {
        //cy.get('input[formcontrolname="userName"]').type('jaqueline');
        //cy.get('input[formcontrolname="password"]').type('1234');
        //cy.get('button[type="submit"]').click();
        //cy.on('window:alert', (str) => {
           // expect(str).to.equal('Invalid user name or password')

        //})
         //para fazer é necessário importar no index.js, comando personalizado cy.login no gui_commands
   
    })
})

