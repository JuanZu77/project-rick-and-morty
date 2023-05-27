///////////////////////////////////////////////////////
//EXPRESS 

// const express = require('express');
// const server = express();


// const router = require('./routes/index')

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//     'Access-Control-Allow-Methods',
//     'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//     });

//     server.use(express.json());
//     server.use('/rickandmorty', router)


const PORT = 3001;
const server = require('./app')

const {conn} = require('./DB_connection');
conn.sync({alter:true}).then(()=>{

    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
        });
        
})
.catch((err)=>{
       throw Error(err);
});









///////////////////////////////////////////////////////
//Lo DESARROLLADO con HTTP (web server & promises)

// const http  =require("http");
// const PORT = 3001;

// //Traemos getCharById de Controllers
// const getCharById = require('./controllers/getCharById')


// http.createServer((req, res)=>{

//    res.setHeader('Access-Control-Allow-Origin', '*');

//   try{
//    //SETEAR la URL
//       const {url} =req; 
   
//       //RUTA
//     if(url.includes('/rickandmorty/character')){

//          const id = url.split('/').at(-1);

//       //CONTROLLER   
//          getCharById(res, id);
//   } 
//  }
//   catch(error){
//       console.log(error);
//       throw new Error (error);
// }
// }).listen(PORT, 'localhost');

