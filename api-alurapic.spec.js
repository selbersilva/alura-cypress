
describe('Busca fotos e dados', () => {
    
    it('Busca fotos de flavio', () => {
        cy.request({ //requisição usando o metado GET para a URL
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => { // Fazer asserção usa o comando then, enquanto veremos o status voltou 200
            expect(res.status).to.be.equal(200) //Faça a requisição e então, dada essa resposta que eu estou chamando de res
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description') // No (res.body[0]) eu vou verificar se tem a propriedade, então é .to.have, expect to have, eu espero que tenha, a .property. E entre parênteses eu vou passar qual é a property que eu espero, que é a (‘description’).
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        }
        )
    }) 

    it.only('Verificar login de flavio', () => {
        cy.request({ 
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',

            body: Cypress.env()

        }).then((res) => { 
            expect(res.status).to.be.equal(200) 
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id') 
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email') 
            expect(res.body.email).to.be.equal("flavio@alurapic.com.br")
        }
        )
    }) 
})


//OBS linha 12:  Na documentação do Cypress temos todas essas combinações, to be, to have, is not, is empty, tem várias verificações que podem ser feitas, eu vou mostrar algumas aqui, mas a documentação é bem vasta, tem várias combinações que podem ser usadas. Para o status eu quero que ele seja igual a 200.