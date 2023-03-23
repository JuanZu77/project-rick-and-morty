import React from "react"

//Opcion 2 con DESTRUCTURING
//onCLose >> la traemos es una propiedad de Card en APP.js
//           ya está definida, por lo tanto aquí sólo la invocamos
export default function Card({name, species, image, gender, onClose}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt="Not Found" /> 
      </div>
   );
};

/* Opcion 1 >> SIN DESTRUCTURING

export default function Card(props) {
   return (
      <div>
         <button onClick="">X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src="" alt="" /> 
      </div>
   );
};

*/
