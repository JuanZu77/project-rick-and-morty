import { useEffect, useState } from 'react'
import './App.css'

import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'

import About from "./components/about/About";
import Detail from './components/detail/Detail';

import Form from './components/form/Form';

//mport store from './components/reducer/store';
import Favorites from './components/favorites/Favorites';

function App () {

  const location = useLocation()

    const [characters, setCharacters] = useState([])

      const onSearch = (id)=>{

      fetch(`http://localhost:3001/rickandmorty/character/${id}`)//fetch(`https://rickandmortyapi.com/api/character/${id}
      
      .then((response) => response.json())
      .then((data) => {
       //
        (data.name 
          ? characters.filter((char)=> char.id===data.id).length ===0 
          : alert(data.error)) 
          ? setCharacters([...characters, data]) 
          : alert ("Personaje ya Existe") 
        })
        .catch((error)=>console.log(error));
      };

      const onClose = (id) => {
            const filtrado = characters.filter((char)=>char.id !== Number(id))
            setCharacters(filtrado)
      };


 const navigate = useNavigate()
 const [access, setAccess] = useState(false)
const userName = 'ejemplo@gmail.com';
const password = '1password';

 const login = (userData) => {
  //console.log(userData)
    if (userData.userName === userName && userData.password === password) {
      //console.log("prueba")
      setAccess(true);
      navigate('/home')
  }
};


useEffect(()=>{ 
     !access && navigate("/")
},[access, navigate]);


const logOut =()=>{
   access && setAccess(false)
   navigate('/')
}

  return (

    <div className='App' style={{ padding: '25px' }}>
      
       {location.pathname !== "/" && 
       <Nav onSearch={onSearch} logOut={logOut}/>}
       
       
        <Routes>
            <Route path='/' element={<Form login={login}/>}/>

             <Route path='/home' element={<Cards
              characters={characters} onClose={onClose} />}
              />

              <Route path='/about' element={<About/>}/>
              <Route path='/favorites' element={<Favorites/>}/>

              <Route path='/detail/:detailId' element={<Detail/>}/>

        </Routes>
                
         <div>
            
          </div>
  </div>
  )
}

export default App;
