import { useState } from 'react'
import './App.css'

import {Routes, Route} from "react-router-dom";

import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
//BD
//import characters from './data.js'
import About from "./components/about/About";
import Detail from './components/detail/Detail';


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
       //
        (data.name 
          ? characters.filter((char)=> char.id===data.id).length ===0 
          : "") 
          ? setCharacters([...characters, data]) 
          : alert ("Personaje ya Existe") 
        });
      };


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
       
        <Routes>
             <Route path='/home' element={<Cards
              characters={characters} onClose={onClose} />}
              />

              <Route path='/about' element={<About/>}/>

              <Route path='/detail/:detailId' element={<Detail/>}/>

        </Routes>
                
         <div>
            
          </div>
  </div>
  )
}

export default App;
