//IMPROTANTE:
// Nos traemos la CARD para Reutilizar las Propiedades de este COMPONENTE
// y generar las CARD de los Demas personajes.
import Card from '../card/Card';

//Importar Styled Components
import styled from 'styled-components';


//Cards es el Contenedor de todas las Card
/*
Asegurarnos que si hay pocas cartas se respeta la altura del div
     width: screen; >> devuelve el ancho de la pantalla del visitante en píxeles.
     margin: auto;
     height: full; >> Por defecto, la propiedad define la altura del área de contenid
*/
const Contenedor = styled.div`
     display: flex;
     justify-content: space-evenly;
     width: screen;
     margin: auto;
     height: full;
     padding: 15px;
     margin-bottom: 15px;
`;

export default function Cards(props) {

   const { characters } = props;

   //key={char.id} el id funcionar como llave de cada elemento hijo
   return (

   <Contenedor>
            
            {characters.map((char)=>(
               <Card
               key={char.id}
               name={char.name}
               species={char.species}
               gender={char.gender}
               image={char.image}

               onClose={() => props.onClose(char.id) /*window.alert('Emulamos que se cierra la card')*/}
               />
            ))}

   </Contenedor>

   )
}




//Podriamos APLICAR DESTRUCTURING en el MAP
// {characters.map(({id, name, species, gender, image})=>(

//    <Card 
//         key={id}
//         name={name}
//         species={species}
//         gender={gender}
//         image={image}
//         onClose={() => props.onClose(id)}
//    />
//   ))}

