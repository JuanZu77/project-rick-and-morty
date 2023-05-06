//////////////////////////////////////////////////////////
//EXPRESS
const axios = require ('axios');
//const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req, res)=>{
      const {id} = req.params;
      
     axios
     .get(`http://rickandmortyapi.com/api/character/${id}`)
     .then((response)=> {

        try{
            const {id, name, gender, species, origin, image, status} =  response.data
  
            res.status(200).json({id, name, gender, species, origin, image, status})
            // res.writeHead(200, {'Content-Type':'application/json'})
    
            // res.end(JSON.stringify({id, name, gender, species, origin, image, status})
            // );
        }catch(error){
            res.status(404).send("Not Found")
            // res.writeHead(404, {'Content-Type':'text/plain'})
            // res.end("Not found")
        }
      })
     .catch((err)=>{
          res.status(500).json({message:err.message})
      })
}
module.exports = getCharById;
///////////////////////////////////////////////////////////
//PROMISES

// const axios = require ('axios');

// function getCharById (res, id){
     
//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=> {
//         const {id, name, gender, species, origin, image, status} =  response.data

//         res.writeHead(200, {'Content-Type':'application/json'})

//         res.end(JSON.stringify({id, name, gender, species, origin, image, status})
//         )
//     })

//     .catch((err)=>{
//         res.writeHead(500, {'Content-Type':'text/plain'})
//         res.end(err.message)
//     })
// }

// //getCharById(null, 1) //traemos el Id 1

//