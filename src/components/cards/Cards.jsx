//REUTILIZAR CARD 

import Card from '../card/Card';
import styled from 'styled-components';

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
