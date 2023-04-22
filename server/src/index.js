
const http  =require("http");
const PORT = 3001;

const data = require('./utils/data');

http.createServer((req, res)=>{
   
   res.setHeader('Access-Control-Allow-Origin', '*');

  try{
   //SETEAR la URL
      const {url} =req; // rescatar la url con destructuring

    if(url.includes('/rickandmorty/character')){

         const id = url.split('/').at(-1);
 
         const character = data.find((char)=> char.id === Number(id))
         console.log(character);
    
    
         //EXISTE "character"
          if(character){
                 res.writeHead(200, {'Content-Type':'application/json'});
                 res.end(JSON.stringify(character));

    } else{
        res.writeHead(404, {'Content-Type':'application/json'});
        res.end(JSON.stringify({error: `character NOT FOUND id:${id}`}));
    }    
          
  } 

 }
  catch(error){
      console.log(error);
      throw new Error (error);
}
}).listen(PORT, 'localhost');


