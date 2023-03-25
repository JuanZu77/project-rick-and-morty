//Solo a este compnenete Vamos a Aplicarle Estilos con CSS Module
//En la caperta search --> creamos el archivo ->> search.module.css
//La importamos con una variable donde se guardan los estilos

import styles from "../search/Search.module.css";

export default function SearchBar(props) {
   console.log(props)
   return (
      <div className={styles.containerSearch}>
      
          <input type='search' />

          <button className={styles.buttonSearch} onClick={()=> props.onSearch("Debe Recibir un ID")}>Agregar</button>
      
      </div>
   );
}
