import { useState } from 'react'
import './App.css'

import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
//BD
//import characters from './data.js'

function App () {

   const [characters, setCharacters] = useState([])

   /*const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    };*/

   const onSearch = (id)=>{

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      //setCharacters([...characters, data])
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert('No hay personajes con ese ID');
      }

    });
    
 };

 //onSearchOPCION 2 --> Solucion eliminar Cuandi hay cartas Repetidas
// Si existe que no la traiga

//Reemplazar desde   .then((data) => {

// (data.name ? characters.filter((char)=> char.if===data.id).length ===0 : "") ?
// setCharacters([...characters, data]) : alert ("Id No encontrado") 
// });
// .catch ((error)=> console.log(error)):
// };


//Pasar onClose() a Cards
 const onClose = (id) => {
  //Recorremos todos los id y filtramos todos los diferentes al id
  //El que sea === al id se elimina
      const filtrado = characters.filter((char)=>char.id !== Number(id))
      setCharacters(filtrado)
 };



  return (

  <div className='App' style={{ padding: '25px' }}>

        <Nav onSearch={onSearch}/>
      <hr />       
      <hr />
          <div>
            <Cards
              characters={characters} onClose={onClose}
            />
          </div>
  </div>
  )
}

export default App
