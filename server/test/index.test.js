
const app = require('../src/app');
const session = require('supertest');
const agent = session(app); //agent--> server

describe('Test de RUTAS', ()=>{

    const character1 = {id: 1, name:'Juan'}
    const character2 = {id: 2, name:'Dani'}


    describe('GET /rickandmorty/character/:id',()=>{

        it('Responde con status: 200', async() =>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async()=>{
           const {body} = await agent.get('/rickandmorty/character/1')
           expect(body).toHaveProperty('id')
           expect(body).toHaveProperty('name')
           expect(body).toHaveProperty('species')
           expect(body).toHaveProperty('gender')
           expect(body).toHaveProperty('status')
           expect(body).toHaveProperty('origin')
           expect(body).toHaveProperty('image')
        });

        it('Si hay un error responde con status: 500', async()=>{
           await agent.get('/rickandmorty/character/juan')
           expect(500)
        });
    });

    describe('GET /rickandmorty/login', ()=>{

        it('Validando el acceso, debe responder con true si las credenciales son correctas', async()=>{
         const {body} =   await agent.get('/rickandmorty/login/?email=ejemplo@gmail.com&password=1password')
           expect(body.access).toBe(true)
        });


        it('Validando con false si las credenciales son incorrectas', async()=>{
            const {body} =   await agent.get('/rickandmorty/login/?email=null&password=nulo')
              expect(body.access).toBe(false)
           });

    });
    
    describe ('POST /rickandmorty/fav', ()=>{

        it ('Lo que envies por body debe ser resuelto en un Array', async()=>{
            const character = {id: 1, name:'Juan'}
           const {body} =  await agent.post('/rickandmorty/fav').send(character)
           expect(body).toBeInstanceOf(Array)
        });

        it (' Si vuelves a enviar un nuevo elemento por body debe devolver un Array con ambos Arreglos enviados', async ()=>{
            const character = {id: 2, name:'Dani'}
            const {body} =  await agent.post('/rickandmorty/fav').send(character)
            expect(body).toContainEqual({id: 1, name:'Juan'})
            expect(body).toContainEqual({id: 2, name:'Dani'})
        });
    });


    describe('DELETE /rickandmorty/fav/:id', ()=>{

        it('Si no encuentra un personaje debe devolver todos', async()=>{
            const {body} = await agent.delete('/rickandmorty/fav/3')
            expect(body).toContainEqual(character1)
            expect(body).toContainEqual(character2)
        });

        it('Se elimina correctamente el personaje', async()=>{
            const {body} = await agent.delete('/rickandmorty/fav/1')
            expect(body).not.toContainEqual(character1)
        
        })
    });


}); 