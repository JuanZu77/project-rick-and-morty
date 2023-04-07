//SEARCH --> INPUT + BOTON AGREGAR

import { useState} from "react";
//import { useNavigate } from "react-router-dom";
import styles from "../search/Search.module.css";

export default function SearchBar(props) {
   //console.log(props)
   const [character, setCharacter] = useState("")
   const handleInputChange = (event) =>{
      const {value} = event.target
      setCharacter(value)
   }


   //const navigate = useNavigate();

   return (
      <div className={styles.containerSearch}>
      
          <input type='search' onChange={handleInputChange}/>

          <button className={styles.buttonSearch} 
             onClick={()=> props.onSearch(character/*"Debe Recibir un ID"*/)}>Agregar</button>

             {/*<button onClick={()=>navigate("/")} className={styles.logOut}>LogOut</button> */}           
      </div>
   );
}
