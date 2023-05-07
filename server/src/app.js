
/*
   SUPERTEST tiene un Metodo que va a clonar nuestro servidor.
   COmo vimos en la clase con Franco, el .listen no puede estar en nuestro server para que SUPERTEST funcione.

   Si tenemos el .listen, cuando se ejecutemos el TEST SUPERTEST va leer nuestro archivo y a laventar lo que tenga definido en ".listen" y ademas va a levantar el servidor ya clonado.
*/

const express = require('express');
const server = express();


const router = require('./routes/index')

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
    });

    server.use(express.json());
    server.use('/rickandmorty', router)

    module.exports = server;