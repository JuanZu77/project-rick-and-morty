//Solo a este compnenete Vamos a Aplicarle Estilos con CSS Module
//En la caperta search --> creamos el archivo ->> search.module.css
//La importamos con una variable donde se guardan los estilos

import { useState } from "react";
import styles from "../search/Search.module.css";

export default function SearchBar(props) {
   //console.log(props)
   const [character, setCharacter] = useState("")
   const handleInputChange = (event) =>{
      const {value} = event.target
      setCharacter(value)
   }

   return (
      <div className={styles.containerSearch}>
      
          <input type='search' onChange={handleInputChange}/>

          <button className={styles.buttonSearch} 
             onClick={()=> props.onSearch(character/*"Debe Recibir un ID"*/)}>Agregar</button>
      
      </div>
   );
}
