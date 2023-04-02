//REUTILIZAR CARD para cada CARTA GENERADA por PERSONAJE

import Card from '../card/Card';
import styled from 'styled-components';


//Cards es el Contenedor de todas las Card
const Contenedor = styled.div`
     display: grid;
     gap: 10px;
     grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
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
           {characters.map(({id, name, species, gender, image})=>(

            <Card 
               id={id}
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={() => props.onClose(id)}
            />
            ))}
   </Contenedor>
   )
}




//Podriamos APLICAR DESTRUCTURING en el MAP


//   {characters.map((char)=>(
//    <Card

//    key={char.id}
//    name={char.name}
//    species={char.species}
//    gender={char.gender}
//    image={char.image}

//    onClose={() => props.onClose(char.id) /*window.alert('Emulamos que se cierra la card')*/}
//    />
// ))}