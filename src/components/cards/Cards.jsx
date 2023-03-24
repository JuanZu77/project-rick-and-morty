//Nos traemos la funcion cards
import Card from '../card/Card';

export default function Cards(props) {
   //Nos traemos el ARRAY characters que contiene 3 objetos (Personajes) 
   const { characters } = props;
   //console.log(props)

   //key={char.id} el id funcionar como llave de cada elemento hijo
   return (
   <div>
   {characters.map((char)=>(
      <Card
      key={char.id}
      name={char.name}
      species={char.species}
      gender={char.gender}
      image={char.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}
      />
   ))}
   </div>
   );
}

//Podriamos APLICAR DESTRUCTURING en el MAP
//   {characters.map((id, name, species, gender, image)=>(
//        key={id}
//        name={name}
//        species={species}
//        gender={gender}
//        image={image}
//        onClose={() => window.alert('Emulamos que se cierra la card')}