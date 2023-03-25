//importamos App.css que contiene los estilos
import './App.css'

//importamos los componentes
import Card from './components/card/Card.jsx'
import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/search/SearchBar.jsx'

//trae la info de nuestra "base de datos" data.js
import characters, { Rick } from './data.js' 
                                //characters por default y tambien exporta a {Rick}

function App () {
  return (
  <div className='App' style={{ padding: '25px' }}>

         <div>
            <SearchBar
              onSearch={(characterID) => window.alert(characterID)}
            />
          </div>

     <hr />
          <div className='cardRick'>
            <Card
              id={Rick.id}
              name={Rick.name}
              species={Rick.species}
              gender={Rick.gender}
              image={Rick.image}
              onClose={() => window.alert('Emulamos que se cierra la card')}
            />
          </div>

      <hr />
          <div>
            <Cards
              characters={characters}
            />
          </div>

  </div>
  )
}
//Cada <HR> linea gris que SEPARA cada <DIV> (Card - Cards - SearchBar) 

export default App
