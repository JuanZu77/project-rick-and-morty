
const http  =require("http");
const PORT = 3001;

//Traemos getCharById de Controllers
const getCharById = require('./controllers/getCharById')


http.createServer((req, res)=>{

   res.setHeader('Access-Control-Allow-Origin', '*');

  try{
   //SETEAR la URL
      const {url} =req; 
   
      //RUTA
    if(url.includes('/rickandmorty/character')){

         const id = url.split('/').at(-1);

      //CONTROLLER   
         getCharById(res, id);
  } 
 }
  catch(error){
      console.log(error);
      throw new Error (error);
}
}).listen(PORT, 'localhost');

//