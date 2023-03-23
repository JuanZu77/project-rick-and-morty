//importamos App.css que contiene los estilos
import './App.css'

//importamos los componentes
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'

//trae la info de nuestra "base de datos" data.js
import characters, { Rick } from './data.js' 
                                //characters por default y tambien exporta a {Rick}

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
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
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
